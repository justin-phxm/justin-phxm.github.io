import devInfo from "../../devInfo.json";
import { AiFillCode, AiOutlineMail } from "react-icons/ai";
import {
  BiSolidUser,
  BiSolidDownArrow,
  BiSolidRightArrow,
} from "react-icons/bi";
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
import AOS from "aos";
AOS.init({ duration: 1000 });

export default function UserInfo() {
  const [aboutSection, setAboutSection] = useState(devInfo.about.sections[0]);
  const [infoDescription, setInfoDescription] = useState(aboutSection.info[0]);
  const [contactVisible, setContactVisible] = useState(true);
  const folderColors = ["text-rose-400", "text-emerald-400", "text-indigo-800"];
  const sectionIcons = [<AiFillCode />, <BiSolidUser />, <FaGamepad />];
  return (
    <>
      <div className=" lg:border-r border-slate-800" data-aos="fade-right">
        {/* Mobile Section icons */}
        {devInfo.about.sections.map((section, index) => (
          <>
            <div
              onClick={() => setAboutSection(section)}
              className="text-white my-1 text-sm lg:hidden cursor-pointer gap-1 bg-slate-800 p-2 flex flex-row items-center"
            >
              {section === aboutSection ? (
                <BiSolidDownArrow />
              ) : (
                <BiSolidRightArrow />
              )}
              <p>{section.title}</p>
            </div>
            {section === aboutSection && (
              <div className="text-sm lg:hidden">
                {aboutSection.info.map((info, index) => (
                  <div
                    onClick={() => setInfoDescription(info)}
                    className="p-1 cursor-pointer flex flex-row gap-2 text-center content-center items-center hover:bg-gray-700 hover:text-white"
                  >
                    <MdKeyboardArrowRight />
                    <BsFolder2
                      class={folderColors[index % folderColors.length]}
                    />
                    <p class={info === infoDescription ? "text-white" : ""}>
                      {info.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {/* Desktop section icons */}
            <div
              className={
                "hidden lg:block cursor-pointer text-3xl hover:bg-gray-700 p-2" +
                (section === aboutSection ? " text-gray-600" : "")
              }
              onClick={() => setAboutSection(section)}
            >
              {sectionIcons[index]}
            </div>
          </>
        ))}
      </div>
      <div
        data-aos="fade-right"
        className=" text-white border-r border-slate-800"
      >
        {/* desktop */}
        <div className="hidden cursor-pointer gap-2 border-b border-slate-800 lg:flex flex-row items-center p-2">
          <BiSolidDownArrow />
          <p class="whitespace-nowrap">{aboutSection.title}</p>
        </div>
        {/* desktop */}
        <div className="text-sm hidden lg:block whitespace-nowrap">
          {aboutSection.info.map((info, index) => (
            <div
              onClick={() => setInfoDescription(info)}
              className="p-1 cursor-pointer flex flex-row gap-2 text-center content-center items-center hover:bg-gray-700"
            >
              <MdKeyboardArrowRight />
              <BsFolder2 class={folderColors[index % folderColors.length]} />
              <p
                class={
                  info === infoDescription ? "text-white" : "text-slate-500"
                }
              >
                {info.title}
              </p>
            </div>
          ))}
        </div>
        <div
          onClick={() => setContactVisible(!contactVisible)}
          className=" bg-slate-800 lg:bg-inherit text-sm lg:text-normal cursor-pointer gap-1 border-t border-b border-slate-800 p-2 flex flex-row items-center"
        >
          {contactVisible ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
          <p>contacts</p>
        </div>
        {contactVisible && (
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
        )}
      </div>
      <div data-aos="fade-up" className="lg:border-r border-slate-800 w-full">
        <InfoView
          infoDescription={infoDescription}
          aboutSection={aboutSection}
        />
      </div>
    </>
  );
}
