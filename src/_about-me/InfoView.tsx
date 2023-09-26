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
export default function InfoView({
  infoDescription,
  aboutSection,
}: {
  infoDescription: InfoDescription;
  aboutSection: any;
}) {
  return (
    <>
      <div className=" border border-t-0 border-l-0 border-r-0 border-slate-800 ">
        <div className=" w-52 flex flex-row justify-between items-center border border-t-0 border-l-0 border-b-0 border-slate-800 ">
          <p className="p-2">{infoDescription.title}</p>
          <GrFormClose class=" cursor-pointer hover:bg-gray-700" />
        </div>
      </div>
      <div>
        <p class="p-2 overflow-hidden">{infoDescription.description}</p>
      </div>
    </>
  );
}
