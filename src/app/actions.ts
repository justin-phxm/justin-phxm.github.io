"use server";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import { z } from "zod";
import { devInfo } from "@/public/devInfo";

hljs.registerLanguage("typescript", typescript);

const gistIDs = devInfo.gists;
const githubUsername = devInfo.contacts.social.github.user;
const GITHUB_REVALIDATE_SECONDS = 60 * 60;
const GITHUB_TIMEOUT_MS = 5_000;

const repoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  language: z.string().nullable(),
});

const gistSchema = z.object({
  id: z.string(),
  html_url: z.string().url(),
  created_at: z.string(),
  description: z.string().nullable(),
  files: z.record(z.string(), z.object({ content: z.string().optional() })),
  owner: z.object({
    login: z.string(),
    avatar_url: z.string().url(),
    html_url: z.string().url(),
  }),
});

export type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
};
export type Gist = {
  id: string;
  html_url: string;
  created_at: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  fileName: string;
  monthsAgo: number;
  code: string;
};

async function fetchGitHub(url: string) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), GITHUB_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: GITHUB_REVALIDATE_SECONDS },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`GitHub request failed with status ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchGist(gistID: string): Promise<Gist | null> {
  const currentDate = new Date();
  try {
    const parsed = gistSchema.safeParse(
      await fetchGitHub(`https://api.github.com/gists/${gistID}`),
    );
    if (!parsed.success) {
      throw new Error("GitHub returned an invalid gist response");
    }

    const result = parsed.data;
    const createdDate = new Date(result.created_at);
    const monthsAgo =
      currentDate.getMonth() -
      createdDate.getMonth() +
      12 * (currentDate.getFullYear() - createdDate.getFullYear());

    const gistCode = getGistCode(result);
    return {
      id: result.id,
      html_url: result.html_url,
      created_at: result.created_at,
      description: result.description ?? "Untitled gist",
      owner: result.owner,
      fileName: gistCode.fileName,
      monthsAgo,
      code: hljs.highlightAuto(gistCode.code, ["typescript"]).value,
    };
  } catch (error) {
    console.error(`Error fetching gist ${gistID}:`, error);
    return null;
  }
}

export async function getGists() {
  const gists = await Promise.all(gistIDs.map((gistID) => fetchGist(gistID)));
  return gists.filter((gist): gist is Gist => gist !== null);
}

export async function getRepos() {
  try {
    const parsed = z
      .array(repoSchema)
      .safeParse(
        await fetchGitHub(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100`,
        ),
      );
    if (!parsed.success) {
      throw new Error("GitHub returned an invalid repository response");
    }

    return parsed.data.map(
      (repo): Repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description ?? `View ${repo.name} on GitHub`,
        html_url: repo.html_url,
        language: repo.language ?? "Other",
      }),
    );
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}

function getGistCode(gist: z.infer<typeof gistSchema>) {
  const [fileName, firstFile] = Object.entries(gist.files)[0] ?? [];
  return {
    fileName: fileName ?? "Unknown file",
    code: firstFile?.content ?? "Unable to load this gist's content.",
  };
}
