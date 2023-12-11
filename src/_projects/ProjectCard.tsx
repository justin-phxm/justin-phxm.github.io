import repoInterface from "../assets/repoInterface.tsx";

export default function ProjectCard(repo: repoInterface) {
  return (
    <>
      <div className=" border border-slate-800 rounded-2xl bg-slate-950 inline-block">
        <div className="w-80 xl:w-96 h-36 rounded-t-2xl bg-gradient-to-t from-slate-950 to-stone-300 border-b border-slate-800" />
        <div className="">
          <div className="w-80 xl:w-96 h-24 px-8 pt-4 justify-center items-center">
            <div className="w-80 h-24 text-white leading-normal">
              {repo.description}
            </div>
          </div>
          <button class="p-2 m-4 rounded-lg bg-slate-800 justify-center items-center gap-2.5 inline-block text-white">
            <a href={repo.html_url} target={"_blank"} class="text-white">
              view-project
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
