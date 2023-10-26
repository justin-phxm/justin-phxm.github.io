import devInfo from "../devInfo.json";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigation = [
    { name: "_hello", href: "/", current: 0 },
    { name: "_about-me", href: "/about-me", current: 1 },
    { name: "_projects", href: "/projects", current: 2 },
    { name: "_contact-me", href: "/contact", current: 3 },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Get the current pathname from the URL
    const currentPathname = window.location.pathname;

    // Find the matching navigation item based on the href
    const matchingNavItem = navigation.find(
      (item) => item.href === currentPathname
    );

    if (matchingNavItem) {
      // If a matching item is found, update 'current' to its 'current' value
      setCurrent(matchingNavItem.current);
    }
  }, []);

  const handleItemClick = (index: number) => {
    setCurrent(index);
  };
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Disclosure as="nav" class="text-slate-500 flex flex-col">
        <div className="flex justify-between border-slate-800 border-t-0 border-r-0 border-l-0 border ">
          <div class="flex flex-row">
            <a
              className="rounded-none px-12 border-t-0 border-l-0 border-b-0 border-slate-800 bg-inherit py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setCurrent(0)}
              href={navigation[0].href}
            >
              {devInfo.logo_name}
            </a>
            {/* Large Screen Buttons */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex ">
                {navigation.map((item, index) =>
                  item.href != "/contact" ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        current == item.current
                          ? "bg-slate-950 text-white border-orange-300 border-r-0"
                          : "text-gray-300 border-b-0  hover:bg-gray-700 hover:text-white",
                        "bg-inherit border-t-0 border-l-0  rounded-none px-6 py-2 text-sm font-medium"
                      )}
                      onClick={() => setCurrent(index)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
          {/* Mobile Button */}
          <Disclosure.Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden relative inline-flex items-center justify-center rounded-none p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            {isMenuOpen ? (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>

          <Link
            className={classNames(
              current === 3
                ? " bg-slate-950 text-white border-orange-300 border-l-0"
                : "text-gray-300 border-b-0 hover:bg-gray-700 hover:text-white",
              " border-t-0 border-r-0  border-slate-800 bg-inherit rounded-none px-3 py-2 text-sm font-medium hidden sm:block"
            )}
            onClick={() => setCurrent(3)}
            href="/contact"
          >
            _contact-me
          </Link>
        </div>
        {/* Mobile Panel Buttons */}
        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 ">
            {navigation.map((item, index) => (
              <Link href={item.href}>
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    current == item.current
                      ? " text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-none  text-base font-medium w-full text-left "
                  )}
                  onClick={() => {
                    handleItemClick(index);
                    setIsMenuOpen(true);
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              </Link>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </>
  );
}
