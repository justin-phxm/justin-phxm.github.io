import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { devInfo } from "@/public/devInfo";

const navigation = {
  "_about-me": "/about-me",
  _projects: "/projects",
  "_contact-me": "/contact",
} as const;

export default function NavBar() {
  return (
    <Collapsible asChild>
      <nav
        aria-label="Main navigation"
        className="flex flex-col justify-between text-slate-500"
      >
        <div className="flex justify-between gap-2 border-b border-slate-800">
          <div className="flex">
            <Button
              asChild
              variant="ghost"
              className="h-auto rounded-none border-r border-slate-800 px-4 py-2 text-gray-300 transition-opacity hover:bg-transparent hover:opacity-50 sm:px-12"
            >
              <Link href="/">
                {devInfo.logo_name}
              </Link>
            </Button>
            <ul className="hidden items-center sm:flex">
              {Object.entries(navigation)
                .slice(0, 2)
                .map(([item, value]) => (
                  <li key={item}>
                    <Button
                      asChild
                      variant="ghost"
                      className="h-auto rounded-none border-r border-slate-800 px-4 py-2 text-gray-300"
                    >
                      <Link href={value}>{item}</Link>
                    </Button>
                  </li>
                ))}
            </ul>
          </div>
          <Button
            asChild
            variant="ghost"
            className="hidden h-auto rounded-none px-4 py-2 text-gray-300 sm:inline-flex"
          >
            <Link href={navigation["_contact-me"]}>
              {"_contact-me" as keyof typeof navigation}
            </Link>
          </Button>
          <CollapsibleTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Toggle navigation"
              className="mr-2 text-slate-500 sm:hidden"
            >
              <RxHamburgerMenu className="size-6" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="sm:hidden">
          <ul>
            {Object.entries(navigation).map(([item, value]) => (
              <li key={item}>
                <Button
                  asChild
                  variant="ghost"
                  className="h-auto w-full justify-start rounded-none bg-slate-800 px-0 py-1 text-base font-normal focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-slate-800"
                >
                  <Link href={value}>
                    {item}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </nav>
    </Collapsible>
  );
}
