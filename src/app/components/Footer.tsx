import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsDownload, BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { devInfo } from "@/public/devInfo";

const social = devInfo.contacts.social;
const RESUME_PDF = "/CV.pdf";
const ICON_PROPS =
  "size-6 transition-all group-hover:scale-150 group-hover:opacity-50";
const socialIconMap: Record<keyof typeof social, React.ReactElement> = {
  github: <AiFillGithub className={ICON_PROPS} />,
  facebook: <BsFacebook className={ICON_PROPS} />,
  twitter: <AiFillTwitterCircle className={ICON_PROPS} />,
  linkedin: <FaLinkedin className={ICON_PROPS} />,
};
export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-slate-800 text-slate-500 shadow md:items-center md:justify-between">
      <span className="flex w-full items-center justify-center text-center text-xs sm:p-3 sm:text-base md:justify-start">
        find me in:
      </span>
      <ul className="flex items-center text-2xl">
        <li className="border-l border-slate-800">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="group size-12 rounded-none"
          >
            <Link
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
            >
              <BsDownload className={ICON_PROPS} />
            </Link>
          </Button>
        </li>
        {Object.entries(social).map(([item, value]) => (
          <li key={item} className="border-l border-slate-800">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group size-12 rounded-none"
            >
              <Link
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={value.title}
              >
                {socialIconMap[item as keyof typeof social]}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </footer>
  );
}
