"use client";
import { devInfo } from "@/public/devInfo";
import { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import DesktopSidebar from "./DesktopSidebar";
import InfoSection from "./InfoSection";
import InfoView from "./InfoView";

const sectionIcons = [
  <AiFillCode key="code" />,
  <BiSolidUser key="user" />,
  <FaGamepad key="gamepad" />,
];
export default function UserInfo() {
  const [aboutSectionIndex, setAboutSectionIndex] = useState(0);
  const [infoDescriptionIndex, setInfoDescriptionIndex] = useState(0);
  const aboutSection = devInfo.about.sections[aboutSectionIndex]!;
  const infoDescription = aboutSection.info[infoDescriptionIndex]!;
  return (
    <>
      <div className="flex flex-col gap-1 border-slate-800 lg:border-r">
        {devInfo.about.sections.map((section, sectionMapIndex) => (
          <details key={section.title}>
            <summary
              tabIndex={-1}
              className="cursor-pointer bg-slate-800 px-2 lg:list-none lg:bg-inherit lg:px-0">
              <span className="text-sm lg:hidden">{section.title}</span>
              <button
                className={`hidden border-b border-slate-800 p-2 text-3xl lg:block ${
                  aboutSectionIndex !== sectionMapIndex && "text-gray-600"
                }`}
                onClick={() => {
                  setAboutSectionIndex(sectionMapIndex);
                  setInfoDescriptionIndex(0);
                }}>
                {sectionIcons[sectionMapIndex]}
              </button>
            </summary>
            <div className="text-sm lg:hidden">
              {devInfo.about.sections[sectionMapIndex]?.info.map(
                (info, infoMapIndex) => (
                  <InfoSection
                    key={info.title}
                    infoTitle={info.title}
                    infoMapIndex={infoMapIndex}
                    sectionMapIndex={sectionMapIndex}
                    infoDescriptionIndex={infoDescriptionIndex}
                    setInfoDescriptionIndex={setInfoDescriptionIndex}
                    aboutSectionIndex={aboutSectionIndex}
                    setAboutSectionIndex={setAboutSectionIndex}
                  />
                ),
              )}
            </div>
          </details>
        ))}
      </div>
      <DesktopSidebar
        aboutSectionIndex={aboutSectionIndex}
        infoDescriptionIndex={infoDescriptionIndex}
        setInfoDescriptionIndex={setInfoDescriptionIndex}
        setAboutSectionIndex={setAboutSectionIndex}
      />
      <div className="w-full border-slate-800 lg:border-r">
        <InfoView
          infoDescription={infoDescription}
          aboutSection={aboutSection}
        />
      </div>
    </>
  );
}
