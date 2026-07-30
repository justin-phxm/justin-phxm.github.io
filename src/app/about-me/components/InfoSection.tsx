import type { DevInfo } from "public/devInfo";
import { FaFileAlt } from "react-icons/fa";

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
    <button
      key={infoTitle}
      onClick={() => {
        setInfoDescriptionIndex(infoMapIndex);
        setAboutSectionIndex(sectionMapIndex);
      }}
      className={`flex w-full flex-row items-center gap-2 px-2 py-1 hover:bg-gray-700 ${
        sectionMapIndex === aboutSectionIndex &&
        infoMapIndex === infoDescriptionIndex
          ? "bg-gray-700 text-white"
          : "text-slate-500"
      }`}
    >
      <FaFileAlt className={folderColors[infoMapIndex % folderColors.length]} />
      <p>{infoTitle}</p>
    </button>
  );
}
