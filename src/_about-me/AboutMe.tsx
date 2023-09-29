// import { useEffect, useState } from "preact/hooks";
// import axios from "axios";
// import devInfo from "../devInfo.json";
import CodeSnippets from "./CodeSnippets";
import UserInfo from "./UserInfo";
export default function AboutMe({}: { path: string }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <UserInfo />
        <CodeSnippets />
      </div>
    </>
  );
}
