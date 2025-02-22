import { getRepos } from "../actions";
import Projects from "./Projects";

export default async function page() {
  const repos = await getRepos();
  return <Projects repos={repos} />;
}
