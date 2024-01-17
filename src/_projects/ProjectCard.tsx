import repoInterface from "../assets/repoInterface.tsx";

export default function ProjectCard({
  repo,
  index,
}: {
  repo: repoInterface;
  index: number;
}) {
  if (!repo.description) repo.description = `View ${repo.name} on Github`;
  // console.log(repo.languages_url);
  return (
    <>
      <li key={repo.id} className="w-80">
        <article className="flex flex-row gap-2  truncate">
          <div className=" text-indigo-500 pl-2 py-2">Project {index + 1}</div>
          <div className="py-2 text-white pl-2 truncate">// _{repo.name}</div>
        </article>
        <div className="w-full border border-slate-800 rounded-2xl bg-slate-950 inline-block">
          <div className="w-full h-36 rounded-t-2xl bg-gradient-to-t from-slate-950 to-stone-300 border-b border-slate-800" />
          <div className="">
            <div className="w-full h-24 p-4 text-white text-ellipsis">
              {repo.description}
            </div>
            <button class="p-2 m-4 rounded-lg bg-slate-800 justify-center items-center gap-2.5 inline-block text-white">
              <a href={repo.html_url} target={"_blank"} class="text-white">
                view-project
              </a>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
