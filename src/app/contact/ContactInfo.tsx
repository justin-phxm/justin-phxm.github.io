import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { devInfo } from "@/public/devInfo";
import Details from "../_components/Details";

export default function ContactInfo() {
  const { direct, find_me_also_in } = devInfo.contacts;
  return (
    <>
      <Details title={direct.title}>
        <Contact
          link={direct.sources.email}
          title={direct.sources.email}
          type={"mailto:"}
        />
        <Contact
          link={direct.sources.phone}
          title={direct.sources.phone}
          type={"tel:"}
        />
      </Details>
      <Details title={"find-me-also-in"}>
        {Object.entries(find_me_also_in).map(([key, value]) => (
          <Contact key={key} link={value.url} title={value.title} />
        ))}
      </Details>
    </>
  );
}

const Contact = ({
  link,
  title,
  type,
}: {
  link: string;
  title: string;
  type?: string;
}) => {
  return (
    <Link
      href={type + link}
      className={`flex select-none items-center gap-2 border-b border-slate-800 p-2 text-sm outline-none hover:text-white focus:text-white focus:underline`}
    >
      <FaExternalLinkAlt />
      {title}
    </Link>
  );
};
