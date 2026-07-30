import CppImage from "@/public/Cpp.png";
import ReactImage from "@/public/React_Hero.png";
import CImage from "@/public/c.webp";
import FallbackImage from "@/public/fallback.jpg";
import JavaImage from "@/public/java.png";
import PythonImage from "@/public/python.jpg";
import type { StaticImageData } from "next/image";
import {
  BiLogoCPlusPlus,
  BiLogoJava,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiCoursera } from "react-icons/si";
import type { JSX } from "react";
type LanguageMap = Record<
  string,
  {
    Icon: JSX.Element;
    Image: StaticImageData;
  }
>;
export const languageMap = {
  HTML: {
    Icon: <BiLogoReact />,
    Image: ReactImage,
  },
  JavaScript: {
    Icon: <BiLogoReact />,
    Image: ReactImage,
  },
  TypeScript: {
    Icon: <BiLogoTypescript />,
    Image: ReactImage,
  },
  Python: {
    Icon: <BiLogoPython />,
    Image: PythonImage,
  },
  Java: {
    Icon: <BiLogoJava />,
    Image: JavaImage,
  },
  C: {
    Icon: <SiCoursera />,
    Image: CImage,
  },
  "C++": {
    Icon: <BiLogoCPlusPlus />,
    Image: CppImage,
  },
} as const satisfies LanguageMap;

export const fallback = {
  Icon: <BiLogoReact />,
  Image: FallbackImage,
};
