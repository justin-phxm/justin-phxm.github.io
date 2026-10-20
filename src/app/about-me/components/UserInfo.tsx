"use client";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { devInfo } from "@/public/devInfo";
import DesktopSidebar from "./DesktopSidebar";
import InfoSection from "./InfoSection";
import InfoView from "./InfoView";

const sectionIcons = [
  <AiFillCode key="code" className="size-7.5" />,
  <BiSolidUser key="user" className="size-7.5" />,
  <FaGamepad key="gamepad" className="size-7.5" />,
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
          <Collapsible key={section.title}>
            <CollapsibleTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                className="h-auto w-full justify-start gap-1 rounded-none bg-slate-800 px-2 py-0 font-normal has-[>svg]:px-2 lg:hidden [&[data-state=open]>svg]:rotate-90"
              >
                <ChevronRightIcon className="size-4 transition-transform" />
                {section.title}
              </Button>
            </CollapsibleTrigger>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={section.title}
              aria-pressed={aboutSectionIndex === sectionMapIndex}
              className={`hidden size-auto rounded-none border-b border-slate-800 p-2 lg:inline-flex ${
                aboutSectionIndex !== sectionMapIndex
                  ? "text-gray-600"
                  : "text-white"
              }`}
              onClick={() => {
                setAboutSectionIndex(sectionMapIndex);
                setInfoDescriptionIndex(0);
              }}
            >
              {sectionIcons[sectionMapIndex]}
            </Button>
            <CollapsibleContent className="text-sm lg:hidden">
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
            </CollapsibleContent>
          </Collapsible>
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
