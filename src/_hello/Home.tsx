import Game from "./Game.tsx";
import devInfo from "../../devInfo.json";
import { RxCrossCircled } from "react-icons/rx";
import AOS from "aos";

AOS.init({ duration: 1000 });
export default function Home({}: { path: string }) {
  return (
    <div className="flex flex-row h-full">
      <section data-aos="fade-right" class="w-full p-4 xl:p-28 ">
        <p class="text-slate-200 text-lg">Welcome. I am</p>
        <p class="text-slate-200 text-4xl sm:text-6xl">{devInfo.name}</p>
        <p class="text-indigo-600 text-3xl">&gt; Software Engineer</p>
        <div className=" py-4"></div>
        <div className="hidden lg:block">
          <p class="text-slate-500 text-base  ">
            // complete the game to continue
          </p>
          <p class="text-slate-500 text-base ">
            // you can also see it on my Github page
          </p>
        </div>
        <div className="lg:hidden">
          <p class="text-slate-500 text-base  ">
            // View on desktop for the full experience
          </p>
        </div>
        <div className="">
          <span class="text-indigo-600 text-base font-medium ">const</span>
          <span class="text-white text-base font-medium "> </span>
          <span class="text-emerald-400 text-base font-medium ">
            githubLink
          </span>
          <span class="text-white text-base font-medium "> = </span>
          <span class="text-rose-400 text-base font-medium ">“</span>
          <a
            href="https://github.com/justin-phxm"
            target="_blank"
            class="text-rose-400 text-base font-medium  underline"
          >
            https://github.com/justin-phxm
          </a>
          <span class="text-rose-400 text-base font-medium ">”</span>
        </div>
      </section>
      <section
        data-aos="fade-left"
        class="hidden w-full lg:flex-row lg:flex relative px-20 py-8 xl:px-28 xl:py-20"
      >
        <div class=" bg-emerald-400 xl:w-96 w-72 xl:h-96 h-72 absolute -top-24 -left-16 transform rotate-45 opacity-40 shadow-2xl filter blur-2xl rounded-full pointer-events-none" />
        <div class="bg-indigo-600 xl:w-96 w-72 xl:h-96 h-72 absolute -bottom-0 -right-24 transform rotate-12 opacity-40 shadow-2xl filter blur-2xl rounded-full pointer-events-none"></div>
        <div class=" p-4 bg-gradient-to-br from-teal-900 via-transparent to-indigo-950 rounded-lg shadow-inner border border-neutral-900 backdrop-blur-3xl flex flex-row w-full ">
          <Game />
          <div class="w-4 h-4 left-1 top-1 absolute bg-teal-700 rounded-full shadow-inner">
            <RxCrossCircled />
          </div>
          <div class="w-4 h-4 right-1 top-1 absolute bg-slate-950 rounded-full shadow-inner">
            <RxCrossCircled />
          </div>
          <div class="w-4 h-4 left-1 bottom-1 absolute bg-slate-950 rounded-full shadow-inner">
            <RxCrossCircled />
          </div>
          <div class="w-4 h-4 right-1 bottom-1 absolute bg-blue-950 rounded-full shadow ">
            <RxCrossCircled />
          </div>
        </div>
      </section>
    </div>
  );
}
