import { FaFileAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import type { DevInfo } from "@/public/devInfo";

const folderColors = ["text-rose-400", "text-emerald-400", "text-indigo-800"];
export default function InfoSection({
  infoTitle,
  aboutSectionIndex,
  infoDescriptionIndex,
  sectionMapIndex,
  infoMapIndex,
  setInfoDescriptionIndex,
  setAboutSectionIndex,
}: {
  infoTitle: DevInfo["about"]["sections"][number]["info"][number]["title"];
  aboutSectionIndex: number;
  infoDescriptionIndex: number;
  sectionMapIndex: number;
  infoMapIndex: number;
  setInfoDescriptionIndex: (index: number) => void;
  setAboutSectionIndex: (index: number) => void;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      aria-pressed={
        sectionMapIndex === aboutSectionIndex &&
        infoMapIndex === infoDescriptionIndex
      }
      key={infoTitle}
      onClick={() => {
        setInfoDescriptionIndex(infoMapIndex);
        setAboutSectionIndex(sectionMapIndex);
      }}
      className={`h-auto w-full justify-start rounded-none px-2 py-1 text-base font-normal hover:bg-gray-700 has-[>svg]:px-2 ${
        sectionMapIndex === aboutSectionIndex &&
        infoMapIndex === infoDescriptionIndex
          ? "bg-gray-700 text-white"
          : "text-slate-500"
      }`}
    >
      <FaFileAlt className={folderColors[infoMapIndex % folderColors.length]} />
      <p>{infoTitle}</p>
    </Button>
  );
}
