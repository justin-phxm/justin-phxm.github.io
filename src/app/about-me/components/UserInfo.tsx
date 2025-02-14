"use client";
import { devInfo } from "public/devInfo";
import { AiFillCode, AiOutlineMail } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import InfoView from "./InfoView";
import { useState } from "react";
import InfoSection from "./InfoSection";

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
              className="cursor-pointer bg-slate-800 px-2 lg:list-none lg:bg-inherit lg:px-0"
            >
              <span className="text-sm lg:hidden">{section.title}</span>
              <button
                className={`hidden border-b border-slate-800 p-2 text-3xl lg:block ${
                  aboutSectionIndex !== sectionMapIndex && "text-gray-600"
                }`}
                onClick={() => {
                  setAboutSectionIndex(sectionMapIndex);
                  setInfoDescriptionIndex(0);
                }}
              >
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
      <div className="border-r border-slate-800 text-white">
        {/* desktop */}
        <details
          open
          className="hidden cursor-pointer flex-row items-center gap-2 border-b border-slate-800 lg:block"
        >
          <summary className="mx-2 whitespace-nowrap">
            {aboutSection.title}
          </summary>
          <div className="hidden whitespace-nowrap text-sm lg:block">
            {aboutSection.info.map((info, infoMapIndex) => (
              <InfoSection
                key={info.title}
                infoTitle={info.title}
                infoDescriptionIndex={infoDescriptionIndex}
                setInfoDescriptionIndex={setInfoDescriptionIndex}
                aboutSectionIndex={aboutSectionIndex}
                sectionMapIndex={aboutSectionIndex}
                infoMapIndex={infoMapIndex}
                setAboutSectionIndex={setAboutSectionIndex}
              />
            ))}
          </div>
        </details>
        <details
          open
          className="mt-1 flex cursor-pointer flex-col border-b border-slate-800 lg:mt-0"
        >
          <summary className="cursor-pointer bg-slate-800 px-2 lg:mx-2 lg:bg-inherit lg:px-0">
            <span className="text-sm lg:text-base lg:capitalize">details</span>
          </summary>
          <div className="flex flex-col gap-1 border-slate-800">
            {[
              <AiOutlineMail key="email" />,
              <BsTelephoneFill key="phone" />,
            ].map((Icon, index) => (
              <button
                key={Icon.key}
                className="flex w-full flex-row items-center gap-2 px-2 py-1 text-sm text-slate-500 hover:bg-gray-700 hover:text-white lg:px-2"
              >
                {Icon}
                <p>
                  {
                    devInfo.contacts.direct.sources[
                      index === 0 ? "email" : "phone"
                    ]
                  }
                </p>
              </button>
            ))}
          </div>
        </details>
      </div>
      <div className="w-full border-slate-800 lg:border-r">
        <InfoView
          infoDescription={infoDescription}
          aboutSection={aboutSection}
        />
      </div>
    </>
  );
}
