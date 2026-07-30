import type { Gist } from "@/app/actions";

export default function CodeSnippetDetails({ gist }: { gist: Gist }) {
  return (
    <details className="">
      <summary className="flex cursor-pointer hover:text-slate-400">
        <p className="select-none">{gist.description}</p>
      </summary>
      <div className="">{gist.description}</div>
    </details>
  );
}
