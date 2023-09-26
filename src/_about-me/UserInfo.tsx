import devInfo from "../../devInfo.json";
import { AiFillCode, AiOutlineMail } from "react-icons/ai";
import { BiSolidUser, BiSolidDownArrow } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsFolder2, BsTelephoneFill } from "react-icons/bs";
import {
  MdKeyboardArrowRight,
  // MdKeyboardArrowDown
} from "react-icons/md";
import InfoView from "./InfoView";
import {
  useState,
  //  useEffect
} from "preact/hooks";

export default function UserInfo() {
  const [aboutSection, setAboutSection] = useState(devInfo.about.sections[0]);
  const [infoDescription, setInfoDescription] = useState(aboutSection.info[0]);
  const folderColors = ["text-rose-400", "text-emerald-400", "text-indigo-800"];
  const sectionIcons = [<AiFillCode />, <BiSolidUser />, <FaGamepad />];
  return (
    <>
      <div className=" border border-l-0 border-t-0 border-b-0 border-slate-800">
        {devInfo.about.sections.map((section, index) => (
          <div
            className="cursor-pointer text-3xl hover:bg-gray-700 p-2"
            onClick={() => setAboutSection(section)}
          >
            {sectionIcons[index]}
          </div>
        ))}
      </div>
      <div className=" text-white border border-l-0 border-t-0 border-b-0 border-slate-800">
        <div className="cursor-pointer gap-1 border border-l-0 border-t-0 border-r-0 border-slate-800 flex flex-row items-center p-2">
          <BiSolidDownArrow />
          <p>{aboutSection.title}</p>
        </div>
        <div className="text-sm">
          {aboutSection.info.map((info, index) => (
            <div
              onClick={() => setInfoDescription(info)}
              className="p-1 cursor-pointer flex flex-row gap-2 text-center content-center items-center hover:bg-gray-700"
            >
              <MdKeyboardArrowRight />
              <BsFolder2 class={folderColors[index % folderColors.length]} />
              <p class="  ">{info.title}</p>
            </div>
          ))}
        </div>
        <div className="cursor-pointer gap-1 border border-l-0 border-r-0 border-slate-800 p-2 flex flex-row items-center">
          <BiSolidDownArrow />
          <p>contacts</p>
        </div>
        <div className=" text-slate-500 text-sm">
          <div className=" p-2 cursor-pointer flex flex-row items-center gap-1 hover:text-white hover:bg-gray-700">
            <AiOutlineMail />
            <p>{devInfo.contacts.direct.sources.email}</p>
          </div>
          <div className="p-2 cursor-pointer flex flex-row items-center gap-1 hover:text-white hover:bg-gray-700">
            <BsTelephoneFill />
            <p>{devInfo.contacts.direct.sources.phone}</p>
          </div>
        </div>
      </div>

      <div className="border border-l-0 border-t-0 border-b-0 border-slate-800">
        <InfoView
          infoDescription={infoDescription}
          aboutSection={aboutSection}
        />
      </div>
    </>
  );
}
