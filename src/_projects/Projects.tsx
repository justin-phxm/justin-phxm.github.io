import { useEffect, useState } from "preact/hooks";
import axios from "axios";
import devInfo from "../../devInfo.json";
import ProjectCard from "./ProjectCard";
import repoInterface from "../assets/repoInterface";
// import userInterface from "../assets/userInterface";
import ProjectFilter from "./ProjectFilter";
import AOS from "aos";
AOS.init({ duration: 1000 });
export default function Projects({}: { path: string }) {
  // const [userData, setUserData] = useState<userInterface>({});
  const [repos, setRepos] = useState<repoInterface[]>([{}]);

  useEffect(() => {
    const githubUsername = devInfo.contacts.social.github.user;

    // axios
    //   .get(`https://api.github.com/users/${githubUsername}`)
    //   .then((response) => {
    //     setUserData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user data:", error);
    //   });

    axios
      .get(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => {
        console.log(response.data);
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

  return (
    <>
      <div class="flex flex-col lg:flex-row h-full w-full">
        <div className="text-white sm:hidden py-4 px-3 text-sm">_projects</div>
        <ProjectFilter />
        <ol
          data-aos="fade-left"
          class="flex flex-row flex-wrap gap-4 p-4 overflow-auto h-96"
        >
          {repos.map((repo: repoInterface, index: number) => (
            <li key={repo.id}>
              <div className="flex flex-row gap-2">
                <div className=" text-indigo-500 p-2">Project {index + 1}</div>
                <div className="p-2 text-white">// _{repo.name}</div>
              </div>
              <ProjectCard {...repo} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
