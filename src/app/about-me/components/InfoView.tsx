import { GrFormClose } from "react-icons/gr";

interface InfoDescription {
  title: string;
  description: string;
  files?:
    | undefined
    | {
        "high-school": string;
        university: string;
      };
}
interface aboutSection {
  title: string;
  icon?: string;
  info: (
    | {
        title: string;
        description: string;
        files?: undefined;
      }
    | {
        title: string;
        description: string;
        files: {
          "high-school": string;
          university: string;
        };
      }
  )[];
}
export default function InfoView({
  infoDescription,
  aboutSection,
}: {
  infoDescription: InfoDescription;
  aboutSection: aboutSection;
}) {
  return (
    <>
      <div className="border-slate-800 lg:border-b">
        <div className="flex w-52 flex-row items-center justify-between border-slate-800 p-2 text-white lg:border-r">
          <div className="inline whitespace-nowrap text-lg font-bold underline lg:text-base lg:font-normal lg:no-underline">
            <span className="lg:hidden">{aboutSection.title} / </span>
            {infoDescription.title}
          </div>
          <GrFormClose className="hidden cursor-pointer hover:bg-gray-700 lg:block" />
        </div>
      </div>
      <div>
        <p className="overflow-hidden p-2 text-white">
          {infoDescription.description}
        </p>
      </div>
    </>
  );
}
