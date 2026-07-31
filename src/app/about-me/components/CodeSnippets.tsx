import Image from "next/image";
import "highlight.js/styles/github-dark-dimmed.css";
import { type Gist, getGists } from "@/app/actions";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import "highlight.js/styles/default.css";
import CodeSnippetDetails from "./CodeSnippetDetails";
export default async function CodeSnippets() {
  const gistData = await getGists();
  return (
    <div className="flex size-full flex-col gap-1 text-white">
      <h1 className="border-t border-slate-800 p-2 text-lg font-bold underline lg:border-t-0 lg:text-base lg:font-normal lg:no-underline">
        {"Code snippet showcase:"}
      </h1>
      <div className="flex max-h-min w-full flex-col gap-2 overflow-auto px-2">
        {gistData.map((gist) => (
          <section key={gist.id}>
            <div className="flex flex-row justify-between">
              <GistAuthor gist={gist} />
              <div className="flex text-sm font-bold text-slate-500">
                <Link
                  href={gist.html_url}
                  className="flex flex-row items-center gap-2 hover:text-slate-400"
                  target={"_blank"}>
                  <AiFillStar />
                  <p>star</p>
                </Link>
              </div>
            </div>
            <CodeSnippetDetails gist={gist} />
            <pre>
              <div
                dangerouslySetInnerHTML={{ __html: gist.code }}
                className="whitespace-pre-wrap rounded-2xl border border-slate-800 bg-slate-950 text-sm shadow md:text-base xl:whitespace-pre"
              />
            </pre>

            {gist.showDescription && (
              <div className="mt-4 border-t border-slate-800 pt-2 text-white">
                {gist.description}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
function GistAuthor({ gist }: { gist: Gist }) {
  return (
    <div className="flex flex-row items-center">
      <Image
        className="size-12 rounded-full"
        src={gist.owner.avatar_url}
        alt={""}
        width={48}
        height={48}
      />
      <div className="p-2">
        <Link
          className="text-sm font-bold text-indigo-500"
          href={gist.owner.html_url}
          target="_blank">
          @{gist.owner.login}
        </Link>
        <div className="text-xs text-slate-500">
          Created {gist.monthsAgo} months ago
        </div>
      </div>
    </div>
  );
}
