import devInfo from "../../devInfo.json";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "preact/hooks";
import AOS from "aos";
AOS.init({ duration: 1000 });
export default function SideBar() {
  const aboutSection = devInfo.contacts.direct;
  const otherSocials = devInfo.contacts.find_me_also_in;
  const otherSocialLinks = Object.entries(otherSocials.sources);
  const otherContactLinks = Object.entries(aboutSection.sources);
  const [findMeVisible, setFindMeVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(true);

  return (
    <div
      data-aos="fade-right"
      className=" text-white border-r border-slate-800"
    >
      <div className=" sm:hidden py-4 px-3 text-sm">_contact-me</div>
      <div
        onClick={() => setContactVisible(!contactVisible)}
        className=" bg-slate-800 lg:bg-inherit text-sm lg:text-normal cursor-pointer gap-1 border-t border-b border-slate-800 p-2 flex flex-row items-center"
      >
        {contactVisible ? <BiSolidDownArrow /> : <BiSolidRightArrow />}

        <p class="whitespace-nowrap">{aboutSection.title}</p>
      </div>
      {/* contact info */}
      {contactVisible && (
        <div className=" text-slate-500 text-sm">
          {otherContactLinks.map(([, value]) => (
            <div className="p-2 cursor-pointer flex flex-row items-center gap-1 hover:text-white">
              <FaExternalLinkAlt />
              <div class="hover:text-white">{value}</div>
            </div>
          ))}
        </div>
      )}
      <div
        onClick={() => setFindMeVisible(!findMeVisible)}
        className=" bg-slate-800 lg:bg-inherit text-sm lg:text-normal cursor-pointer gap-1 border-t border-b border-slate-800 p-2 flex flex-row items-center"
      >
        {findMeVisible ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
        <p>find-me-also-in</p>
      </div>
      {findMeVisible && (
        <div className=" text-slate-500 text-sm">
          {otherSocialLinks.map(([, value]) => (
            <div className="p-2 cursor-pointer flex flex-row text-slate-500 items-center gap-1 hover:text-white">
              <FaExternalLinkAlt />
              <a
                href={value.url}
                target={"_blank"}
                class=" text-slate-500 hover:text-white"
              >
                {value.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
