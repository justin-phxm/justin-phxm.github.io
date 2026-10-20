import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Repo } from "../actions";
import { fallback, languageMap } from "./LanguageMaps";
export default function ProjectCard({
  repo,
  index,
}: {
  repo: Repo;
  index: number;
}) {
  const description = repo.description || `View ${repo.name} on Github`;
  const language =
    languageMap[repo.language as keyof typeof languageMap] ?? fallback;

  return (
    <li className="w-full max-w-80">
      <article className="flex items-center gap-2 truncate">
        <h1 className="text-indigo-500">Project {index + 1}</h1>
        <h2 className="truncate text-white">
          {"// _"}
          {repo.name}
        </h2>
      </article>
      <Card className="gap-0 rounded-2xl border-slate-800 bg-slate-950 py-0 shadow-none">
        <Image
          className="h-36 w-full rounded-t-2xl border-b border-slate-800 object-cover"
          height={144}
          width={288}
          src={language.Image}
          alt={repo.language}
        />
        <CardContent className="flex h-36 flex-col justify-between gap-2 p-0">
          <p className="max-h-20 overflow-auto p-2 text-white md:p-4">
            {description}
          </p>
          <CardFooter className="justify-between p-0 pl-2">
            <Button
              asChild
              variant="secondary"
              className="h-auto rounded-lg border border-slate-900 p-1 font-normal shadow-xl md:p-2 md:text-base"
            >
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                view-project
              </Link>
            </Button>
            <div className="p-2 text-4xl">{language.Icon}</div>
          </CardFooter>
        </CardContent>
      </Card>
    </li>
  );
}
