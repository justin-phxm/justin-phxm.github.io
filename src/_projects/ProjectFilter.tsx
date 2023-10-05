import {
  BiSolidDownArrow,
  BiLogoReact,
  BiLogoAngular,
  BiLogoPython,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

export default function ProjectFilter() {
  const languages = ["React", "Angular", "Nextjs", "Typescript", "Python"];
  return (
    <>
      <div class="border-r border-slate-800">
        <div className="flex flex-row border-b border-slate-800 text-white items-center text-center gap-2 p-2">
          <BiSolidDownArrow />
          <div className="">projects</div>
        </div>
        <div className="flex flex-col">
          <ul>
            {languages.map((language) => (
              <li className="flex flex-row p-2 cursor-pointer text-2xl gap-2 text-center content-center items-center hover:bg-gray-700">
                <input type="checkbox" />
                {language === "React" && <BiLogoReact />}
                {language === "Angular" && <BiLogoAngular />}
                {language === "Nextjs" && <SiNextdotjs />}
                {language === "Typescript" && <BiLogoTypescript />}
                {language === "Python" && <BiLogoPython />}
                <p className="text-slate-500 text-base">{language}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
