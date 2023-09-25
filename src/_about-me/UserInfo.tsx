import devInfo from "../../devInfo.json";
import { AiFillCode, AiOutlineMail } from "react-icons/ai";
import { BiSolidUser, BiSolidDownArrow } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsFolder2, BsTelephoneFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import InfoView from "./InfoView";
export default function UserInfo() {
  return (
    <>
      <div className=" border border-l-0 border-t-0 border-b-0 border-slate-800">
        <div className=" text-3xl hover:bg-gray-700 p-2">
          <AiFillCode />
        </div>
        <div className=" text-3xl hover:bg-gray-700 p-2">
          <BiSolidUser />
        </div>
        <div className=" text-3xl hover:bg-gray-700 p-2">
          <FaGamepad />
        </div>
      </div>
      <div className=" text-white border border-l-0 border-t-0 border-b-0 border-slate-800">
        <div className="cursor-pointer gap-1 border border-l-0 border-t-0 border-r-0 border-slate-800 flex flex-row items-center p-2">
          <BiSolidDownArrow />
          <p>personal-info</p>
        </div>
        <div className="text-sm">
          <div className="p-1 cursor-pointer flex flex-row gap-2 text-center content-center items-center hover:bg-gray-700">
            <MdKeyboardArrowRight />
            <BsFolder2 class=" text-rose-400" />
            <p class="  ">bio</p>
          </div>
          <div className="p-1 cursor-pointer flex flex-row gap-2 text-center content-center items-center hover:bg-gray-700">
            <MdKeyboardArrowDown />
            <BsFolder2 class=" text-emerald-400" />
            <p class="">interests</p>
          </div>
          <div className="p-1 cursor-pointer flex flex-row gap-2 text-center content-center items-center hover:bg-gray-700">
            <MdKeyboardArrowDown />
            <BsFolder2 class=" text-indigo-800" />
            <p class="">education</p>
          </div>
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
        <InfoView />
      </div>
    </>
  );
}
