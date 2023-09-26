import { GrFormClose } from "react-icons/gr";
export default function InfoView({ aboutSection }: { aboutSection: any }) {
  return (
    <>
      <div className="p-1 text-sm cursor-pointer flex flex-row justify-between border border-t-0 border-l-0 border-r-0 border-slate-800 hover:bg-gray-700">
        <div className=" block">{aboutSection.title}</div>
        <GrFormClose />
      </div>
      <div>
        <p>{aboutSection.info[0].title}</p>
        <p>{aboutSection.info[0].description}</p>

        {/* <p>{aboutSection.info.description}</p> */}
        {/* {aboutSection.info.map((info: any) => (
          <div className="p-1 cursor-pointer flex flex-row gap-2 text-center content-center items-center hover:bg-gray-700">
            <p>{info.title}</p>
            <p>{info.description}</p>
          </div> */}
      </div>
    </>
  );
}
