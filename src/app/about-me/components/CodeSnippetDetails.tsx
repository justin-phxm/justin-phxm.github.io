import type { Gist } from "@/app/actions";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

function getFirstEntry<T extends Record<string, any>>(obj: T) {
  const [key, value] = Object.entries(obj)[0] as [keyof T, T[keyof T]];
  return { key, value };
}
export default function CodeSnippetDetails({ gist }: { gist: Gist }) {
  const { key: fileName } = getFirstEntry(gist.files);
  return (
    <details>
      <summary className="flex cursor-pointer justify-between hover:text-slate-400">
        <p className="select-none">{fileName}</p>
        <Link href={gist.html_url} target="_blank">
          <FaLink />
        </Link>
      </summary>
      <div>{gist.description}</div>
    </details>
  );
}
