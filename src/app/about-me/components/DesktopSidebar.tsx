import Details from "@/app/_components/Details";
import ContactInfo from "@/app/contact/ContactInfo";
import { devInfo } from "@/public/devInfo";
import InfoSection from "./InfoSection";

export default function DesktopSidebar(props: {
  aboutSectionIndex: number;
  infoDescriptionIndex: number;
  setInfoDescriptionIndex: React.Dispatch<React.SetStateAction<number>>;
  setAboutSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { aboutSectionIndex } = props;
  const aboutSection = devInfo.about.sections[aboutSectionIndex]!;
  return (
    <div className="divide-slate-800 border-r border-slate-800 py-2 text-white">
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
      <ContactInfo />
    </div>
  );
}
