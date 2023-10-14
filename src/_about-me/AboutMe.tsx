// import { useEffect, useState } from "preact/hooks";
// import axios from "axios";
// import devInfo from "../devInfo.json";
import CodeSnippets from "./CodeSnippets";
import UserInfo from "./UserInfo";
export default function AboutMe({}: { path: string }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-full w-full">
        <div className="text-white sm:hidden py-4 px-3 text-sm">_about-me</div>
        <UserInfo />
        <CodeSnippets />
      </div>
    </>
  );
}
