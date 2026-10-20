import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { languageMap } from "./LanguageMaps";

export default function ProjectFilter({
  filterLanguages: languages,
  setFilterLanguages,
}: {
  filterLanguages: Record<string, boolean>;
  setFilterLanguages: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}) {
  const setLanguage = (language: string, checked: boolean) => {
    setFilterLanguages((prevLanguages) => ({
      ...prevLanguages,
      [language]: checked,
    }));
  };
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="h-auto w-full justify-start gap-1 rounded-none bg-slate-800 p-2 font-normal text-white has-[>svg]:px-2 lg:text-base [&[data-state=open]>svg]:rotate-90"
        >
          <ChevronRightIcon className="size-4 transition-transform" />
          Framework/Language
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul>
          {Object.entries(languages).map(([language, value]) => (
            <li key={language} className="hover:bg-gray-700">
              <Label
                htmlFor={`language-${language}`}
                className="flex cursor-pointer items-center gap-2 p-2 font-normal"
              >
                <Checkbox
                  id={`language-${language}`}
                  checked={value}
                  onCheckedChange={(checked) =>
                    setLanguage(language, checked === true)
                  }
                />
                <span aria-hidden="true" className="text-2xl">
                  {languageMap[language as keyof typeof languageMap].Icon}
                </span>
                <span className="text-base text-slate-500 lg:text-lg">
                  {language}
                </span>
              </Label>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
