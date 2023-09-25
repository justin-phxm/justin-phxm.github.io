import { useEffect, useState } from "preact/hooks";
import axios from "axios";
import devInfo from "../../devInfo.json";
export default function Projects({}: { path: string }) {
  interface Repo {
    id: number;
    name: string;
    description: string;
  }
  interface User {
    login: string;
    followers: number;
    public_repos: number;
  }
  const [userData, setUserData] = useState<User>({
    login: "",
    followers: 0,
    public_repos: 0,
  });
  const [repos, setRepos] = useState<Repo[]>([
    {
      id: 0,
      name: "",
      description: "",
    },
  ]);

  useEffect(() => {
    // Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
    const githubUsername = devInfo.contacts.social.github.user;

    // Fetch user data
    axios
      .get(`https://api.github.com/users/${githubUsername}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch user's repositories
    axios
      .get(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

  return (
    <div>
      <h1>GitHub Profile</h1>
      <p>Username: {userData.login}</p>
      <p>Followers: {userData.followers}</p>
      <p>Repos: {userData.public_repos}</p>

      <h2>Repositories</h2>
      <ul>
        {repos.map((repo: Repo) => (
          <li key={repo.id}>
            <strong>{repo.name}</strong>:{" "}
            {repo.description || "No description available"}
          </li>
        ))}
      </ul>
    </div>
  );
}
