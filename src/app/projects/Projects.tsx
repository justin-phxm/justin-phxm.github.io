"use client";
import { type Repo } from "../actions";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { useState } from "react";
import { languageMap } from "./LanguageMaps";
import AnimatedComponent from "@/styles/AnimatedComponent";

const initialFilterState = Object.fromEntries(
  Object.keys(languageMap).map((key) => [key, true]),
) as Record<keyof typeof languageMap, boolean>;
export default function Projects({ repos }: { repos: Repo[] }) {
  const [filterLanguages, setFilterLanguages] = useState(initialFilterState);
  return (
    <div className="flex size-full flex-col lg:flex-row">
      <AnimatedComponent variants="fadeRight" className="lg:flex">
        <ProjectFilter
          filterLanguages={filterLanguages}
          setFilterLanguages={setFilterLanguages}
        />
      </AnimatedComponent>
      <AnimatedComponent variants="fadeLeft">
        <ol className="flex flex-wrap justify-evenly gap-4 overflow-y-auto border-l border-slate-800 p-2 md:p-4">
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
      </AnimatedComponent>
    </div>
  );
}
