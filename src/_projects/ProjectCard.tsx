import repoInterface from "../assets/repoInterface.tsx";
import {
  // BiSolidDownArrow,
  BiLogoReact,
  // BiLogoAngular,
  BiLogoPython,
  // BiLogoTypescript,
  // BiSolidRightArrow,
  BiLogoJava,
  BiLogoCPlusPlus,
} from "react-icons/bi";

export default function ProjectCard({
  repo,
  index,
}: {
  repo: repoInterface;
  index: number;
}) {
  if (!repo.description) repo.description = `View ${repo.name} on Github`;
  const reactImage = "../../public/React_Hero.png";
  const pythonImage = "../../public/python.jpg";
  const cImage = "../../public/C.png";
  const javaImage = "../../public/java.png";
  const fallBack = "../../public/fallback.jpg";
  return (
    <>
      <li key={repo.id} className="w-80">
        <article className="flex flex-row gap-2  truncate">
          <div className=" text-indigo-500 pl-2 py-2">Project {index + 1}</div>
          <div className="py-2 text-white pl-2 truncate">// _{repo.name}</div>
        </article>
        <div className="w-full border border-slate-800 rounded-2xl bg-slate-950 inline-block">
          <img
            className="object-cover w-full h-36 rounded-t-2xl border-b border-slate-800"
            src={
              repo.language === "HTML" ||
              repo.language === "JavaScript" ||
              repo.language === "TypeScript"
                ? reactImage
                : repo.language === "Python"
                ? pythonImage
                : repo.language === "Java"
                ? javaImage
                : repo.language === "C" || repo.language === "C++"
                ? cImage
                : fallBack // Fallback image if none of the conditions are met
            }
            alt="Language specific image"
          />

          <div className="">
            <div className="w-full h-24 p-4 text-white text-ellipsis">
              {repo.description}
            </div>
            <div className="flex flex-row justify-between">
              <button class="p-2 m-4 rounded-lg bg-slate-800 justify-center items-center gap-2.5 inline-block text-white">
                <a href={repo.html_url} target={"_blank"} class="text-white">
                  view-project
                </a>
              </button>
              <div className="p-2 m-4">
                {(repo.language === "HTML" ||
                  repo.language === "JavaScript" ||
                  repo.language === "TypeScript") && <BiLogoReact size={25} />}
                {repo.language === "Python" && <BiLogoPython size={25} />}
                {repo.language === "Java" && <BiLogoJava size={25} />}
                {repo.language === "C" && <BiLogoCPlusPlus size={25} />}
                {repo.language === "C++" && <BiLogoCPlusPlus size={25} />}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
