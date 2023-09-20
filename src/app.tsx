import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import Game from "./Game.tsx";
import devInfo from "../devInfo.json";
export function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <section class="w-full p-20 ">
          <p class="text-slate-200 text-lg">Welcome. I am</p>
          <p class="text-slate-200 text-6xl">{devInfo.name}</p>
          <p class="text-indigo-600 text-3xl">&gt; Full-stack web developer</p>
          <p class="text-slate-500 text-base ">
            // complete the game to continue
          </p>
          <p class="text-slate-500 text-base ">
            // you can also see it on my Github page
          </p>
          <div>
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
        <section class="hidden w-full md:flex-row md:flex relative">
          <div class=" bg-emerald-400 w-96 h-96 absolute top-0 left-0 z-0 transform rotate-45 opacity-40 shadow-2xl filter blur-2xl " />
          <div class="bg-indigo-600 w-96 h-96 absolute top-48 left-28 z-0 transform rotate-12 opacity-40 shadow-2xl filter blur-2xl"></div>
          <div class=" p-4 bg-gradient-to-br from-teal-900 to-emerald-400 rounded-lg shadow-inner border border-neutral-900 backdrop-blur-3xl flex flex-row w-full">
            <Game />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
