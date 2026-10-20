import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Details({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <Collapsible className={className} defaultOpen>
      <CollapsibleTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="h-auto w-full justify-start gap-1 rounded-none bg-slate-800 px-2 py-0 text-base font-normal text-white has-[>svg]:px-2 lg:bg-inherit [&[data-state=open]>svg]:rotate-90"
        >
          <ChevronRightIcon className="size-4 transition-transform" />
          {title}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col text-slate-500">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
