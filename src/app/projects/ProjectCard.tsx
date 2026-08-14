import Image from "next/image";
import Link from "next/link";
import type { Repo } from "../actions";
import { fallback, languageMap } from "./LanguageMaps";
export default function ProjectCard({
  repo,
  index,
}: {
  repo: Repo;
  index: number;
}) {
  const language =
    languageMap[repo.language as keyof typeof languageMap] ?? fallback;
  const description = repo.description || `View ${repo.name} on GitHub`;

  return (
    <li className="w-full max-w-80">
      <article className="flex items-center gap-2 truncate">
        <h1 className="text-indigo-500">Project {index + 1}</h1>
        <h2 className="truncate text-white">
          {"// _"}
          {repo.name}
        </h2>
      </article>
      <div className="rounded-2xl border border-slate-800 bg-slate-950">
        <Image
          className="h-36 w-full rounded-t-2xl border-b border-slate-800 object-cover"
          height={144}
          width={288}
          src={language.Image}
          alt={`${repo.language} project preview`}
        />
        <div className="flex h-36 flex-col justify-between gap-2">
          <p className="max-h-20 overflow-auto p-2 text-white md:p-4">
            {description}
          </p>
          <div className="flex items-center justify-between pl-2">
            <Link
              href={repo.html_url}
              className="rounded-lg border border-slate-900 bg-slate-800 p-1 text-sm shadow-xl md:p-2 md:text-inherit"
              target={"_blank"}
              rel="noreferrer"
            >
              view-project
            </Link>
            <div className="p-2 text-4xl">{language.Icon}</div>
          </div>
        </div>
      </div>
    </li>
  );
}
