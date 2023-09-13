import devInfo from "../devInfo.json";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { JSX } from "preact/jsx-runtime";
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
  return (
    <>
      <footer class="rounded-lg shadow m-4 text-slate-500 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm sm:text-center dark:text-gray-400">
            find me in:
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
            {Object.values(social).map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:underline">
                  {item.icon ? item.icon : item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
