import {
  BiSolidDownArrow,
  BiLogoReact,
  BiLogoPython,
  BiLogoTypescript,
  BiSolidRightArrow,
  BiLogoJava,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import { SiCoursera } from "react-icons/si";

import { StateUpdater, useState } from "preact/hooks";
import AOS from "aos";
AOS.init({ duration: 1000 });
export default function ProjectFilter({
  filterLanguages: languages,
  setFilterLanguages,
}: {
  filterLanguages: { [key: string]: boolean };
  setFilterLanguages: StateUpdater<{
    [key: string]: boolean;
  }>;
}) {
  const [filterVisible, setFilterVisible] = useState(true);
  const toggleLanguage = (language: string) => {
    setFilterLanguages((prevLanguages) => ({
      ...prevLanguages,
      [language]: !prevLanguages[language],
    }));
  };
  const languageMap = {
    React: <BiLogoReact />,
    Python: <BiLogoPython />,
    Java: <BiLogoJava />,
    C: <SiCoursera />,
    "C++": <BiLogoCPlusPlus />,
    JavaScript: <BiLogoReact />,
    TypeScript: <BiLogoTypescript />,
    HTML: <BiLogoReact />,
  };
  return (
    <>
      <div data-aos="fade-right" class="border-r border-slate-800">
        <div
          onClick={() => setFilterVisible(!filterVisible)}
          className=" text-white bg-slate-800 lg:bg-inherit text-sm lg:text-normal cursor-pointer gap-1 border-t border-b border-slate-800 p-2 flex flex-row items-center">
          {filterVisible ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
          <p class="whitespace-nowrap">Framework/Language</p>
        </div>
        <div className="flex flex-col">
          <ul>
            {filterVisible &&
              Object.entries(languages).map(([language, value]) => (
                <li className="flex flex-row p-2 cursor-pointer text-2xl gap-2 text-center content-center items-center hover:bg-gray-700">
                  <input
                    id={language}
                    type="checkbox"
                    checked={value}
                    onChange={() => toggleLanguage(language)}
                  />
                  {languageMap[language as keyof typeof languageMap]}
                  <label
                    htmlFor={language}
                    className="text-slate-500 text-base">
                    {language}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
