import {
  BiSolidDownArrow,
  BiLogoReact,
  BiLogoAngular,
  BiLogoPython,
  BiLogoTypescript,
  BiSolidRightArrow,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { useState } from "preact/hooks";
import AOS from "aos";
AOS.init({ duration: 1000 });
export default function ProjectFilter() {
  const languages = ["React", "Angular", "Nextjs", "Typescript", "Python"];
  const [filterVisible, setFilterVisible] = useState(true);
  return (
    <>
      <div data-aos="fade-right" class="border-r border-slate-800">
        <div
          onClick={() => setFilterVisible(!filterVisible)}
          className=" text-white bg-slate-800 lg:bg-inherit text-sm lg:text-normal cursor-pointer gap-1 border-t border-b border-slate-800 p-2 flex flex-row items-center"
        >
          {filterVisible ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
          <p class="whitespace-nowrap">Framework/Language</p>
        </div>
        <div className="flex flex-col">
          <ul>
            {filterVisible &&
              languages.map((language) => (
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
