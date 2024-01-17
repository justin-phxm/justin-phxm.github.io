import {
  BiSolidDownArrow,
  BiLogoReact,
  // BiLogoAngular,
  BiLogoPython,
  // BiLogoTypescript,
  BiSolidRightArrow,
  BiLogoJava,
  BiLogoCPlusPlus,
} from "react-icons/bi";
// import { SiNextdotjs } from "react-icons/si";
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
  const [filterVisible, setFilterVisible] = useState(false);
  const toggleLanguage = (language: string) => {
    setFilterLanguages((prevLanguages) => ({
      ...prevLanguages,
      [language]: !prevLanguages[language],
    }));
  };
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
              Object.entries(languages).map(([language, value]) => (
                <li className="flex flex-row p-2 cursor-pointer text-2xl gap-2 text-center content-center items-center hover:bg-gray-700">
                  <input
                    id={language}
                    type="checkbox"
                    checked={value}
                    onChange={() => toggleLanguage(language)}
                  />
                  {language === "React" && <BiLogoReact />}
                  {language === "Python" && <BiLogoPython />}
                  {language === "Java" && <BiLogoJava />}
                  {language === "C/C++" && <BiLogoCPlusPlus />}
                  <label for={language} className="text-slate-500 text-base">
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
