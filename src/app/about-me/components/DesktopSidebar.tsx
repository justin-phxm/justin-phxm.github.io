import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import InfoSection from "./InfoSection";
import { devInfo } from "@/public/devInfo";
import Details from "@/app/_components/Details";

export default function DesktopSidebar(props: {
  aboutSectionIndex: number;
  infoDescriptionIndex: number;
  setInfoDescriptionIndex: React.Dispatch<React.SetStateAction<number>>;
  setAboutSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { aboutSectionIndex } = props;
  const aboutSection = devInfo.about.sections[aboutSectionIndex]!;
  return (
    <div className="border-r border-slate-800 text-white">
      <Details className="hidden lg:block" title={aboutSection.title}>
        {aboutSection.info.map((info, infoMapIndex) => (
          <InfoSection
            key={info.title}
            infoTitle={info.title}
            infoMapIndex={infoMapIndex}
            sectionMapIndex={aboutSectionIndex}
            {...props}
          />
        ))}
      </Details>
      <Details title={"details"} className="hidden lg:block">
        {[<AiOutlineMail key="email" />, <BsTelephoneFill key="phone" />].map(
          (Icon, index) => (
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
          ),
        )}
      </Details>
    </div>
  );
}
