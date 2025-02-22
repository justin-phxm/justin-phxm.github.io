"use client";
import { type Repo } from "../actions";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { useState } from "react";
import { languageMap } from "./LanguageMaps";

const initialFilterState = Object.fromEntries(
  Object.keys(languageMap).map((key) => [key, true]),
) as Record<keyof typeof languageMap, boolean>;
export default function Projects({ repos }: { repos: Repo[] }) {
  const [filterLanguages, setFilterLanguages] = useState(initialFilterState);
  return (
    <div className="flex size-full flex-col lg:flex-row">
      <div className="px-3 py-4 text-sm text-white sm:hidden">_projects</div>
      <ProjectFilter
        filterLanguages={filterLanguages}
        setFilterLanguages={setFilterLanguages}
      />
      <ol className="flex flex-wrap justify-evenly gap-4 overflow-y-auto p-2 md:p-4">
        {repos
          .filter((repo) =>
            Object.keys(filterLanguages).some(
              (language) =>
                filterLanguages[language as keyof typeof languageMap] &&
                repo.language === language,
            ),
          )
          .map((repo: Repo, index: number) => (
            <ProjectCard key={index} repo={repo} index={index} />
          ))}
      </ol>
    </div>
  );
}
