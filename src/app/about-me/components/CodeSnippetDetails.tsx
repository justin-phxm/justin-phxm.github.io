import Link from "next/link";
import { FaLink } from "react-icons/fa";
import type { Gist } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CodeSnippetDetails({ gist }: { gist: Gist }) {
  const fileName = Object.keys(gist.files)[0] ?? "Code snippet";
  return (
    <Collapsible>
      <div className="flex items-center justify-between gap-2">
        <CollapsibleTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className="h-auto min-w-0 flex-1 justify-start whitespace-normal rounded-none p-0 text-left text-base font-normal hover:bg-transparent hover:text-slate-400"
          >
            {fileName}
          </Button>
        </CollapsibleTrigger>
        <Button asChild variant="ghost" size="icon" className="size-6">
          <Link
            href={gist.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${fileName} on GitHub`}
          >
            <FaLink />
          </Link>
        </Button>
      </div>
      <CollapsibleContent>{gist.description}</CollapsibleContent>
    </Collapsible>
  );
}
