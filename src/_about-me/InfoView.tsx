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
  icon: string;
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
  function addAsteriskAfterLineWrap(text: string) {
    // Use a regular expression to match line continuations (lines starting with whitespace)
    const regex = /(\n\s+)/g;

    // Replace each line continuation with '* ' followed by the whitespace
    const modifiedText = text.replace(regex, (match) => `*\xA0${match}`);

    return modifiedText;
  }
  return (
    <>
      <div className="lg:border-b border-slate-800 ">
        <div className="p-2 w-52 flex flex-row justify-between items-center lg:border-r border-slate-800 ">
          <div className="inline whitespace-nowrap">
            <span class="text-white lg:hidden">// {aboutSection.title}</span>
            <span class="text-slate-500 ">
              <span class="text-slate-500 lg:hidden"> / </span>
              {infoDescription.title}
            </span>
          </div>

          <GrFormClose class="hidden lg:block cursor-pointer hover:bg-gray-700" />
        </div>
      </div>
      <div>
        <p class="p-2 overflow-hidden">
          {addAsteriskAfterLineWrap(infoDescription.description)}
        </p>
      </div>
    </>
  );
}
