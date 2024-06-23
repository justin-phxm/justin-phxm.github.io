import devInfo from "../devInfo.json";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsDownload } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { JSX } from "preact/jsx-runtime";
import { FaLinkedin } from "react-icons/fa6";

const SOCIAL_CSS =
  "p-3 border-slate-800 border-t-0 border-r-0 border-b-0 border";

export default function Footer() {
  type socialType = {
    [key: string]: {
      title: string;
      url: string;
      icon?: JSX.Element;
    };
  };
  const social: socialType = devInfo.contacts.social;
  social.github.icon = <AiFillGithub />;
  social.facebook.icon = <BsFacebook />;
  social.twitter.icon = <AiFillTwitterCircle />;
  social.linkedin.icon = <FaLinkedin />;
  const RESUME_PDF = "/CV.pdf";
  return (
    <>
      <footer class="w-full flex border border-b-0 border-l-0 border-r-0 border-slate-800 justify-between md:items-center md:justify-between shadow text-slate-500 dark:bg-gray-800">
        <span class="sm:text-center dark:text-gray-400 p-3">find me in:</span>
        <ul class="flex items-center text-2xl font-medium dark:text-gray-400">
          <li
            class={
              "p-3 border-slate-800 border-t-0 border-r-0 border-b-0 border"
            }>
            <a href={RESUME_PDF} className="hover:underline" target="_blank">
              <BsDownload />
            </a>
          </li>

          {Object.values(social).map((item, index) => (
            <li key={index} class={SOCIAL_CSS}>
              <a href={item.url} className="hover:underline" target="_blank">
                {item.icon ? item.icon : item.title}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
