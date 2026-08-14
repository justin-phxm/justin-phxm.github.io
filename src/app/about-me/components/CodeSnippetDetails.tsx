import Link from "next/link";
import { FaLink } from "react-icons/fa";
import type { Gist } from "@/app/actions";

export default function CodeSnippetDetails({ gist }: { gist: Gist }) {
  return (
    <details>
      <summary className="flex cursor-pointer justify-between hover:text-slate-400">
        <p className="select-none">{gist.fileName}</p>
        <Link href={gist.html_url} target="_blank" rel="noreferrer">
          <FaLink />
        </Link>
      </summary>
      <div>{gist.description}</div>
    </details>
  );
}
