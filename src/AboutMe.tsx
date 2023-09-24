import { useEffect, useState } from "preact/hooks";
import axios from "axios";
import devInfo from "../devInfo.json";

export default function AboutMe({}: { path: string }) {
  const [gistData, setGistData] = useState<any>([]);
  useEffect(() => {
    const gistIDs = devInfo.gists;
    gistIDs.map((gistID: string) => {
      axios
        .get(`https://api.github.com/gists/${gistID}`)
        .then((response) => {
          console.log(response.data);
          setGistData((prevData: any) => [...prevData, response.data]);
        })
        .catch((error) => {
          console.error("Error fetching gists:", error);
        });
    });
  }, []);

  return (
    <>
      <div>Code snippet showcase:</div>
      {gistData.map((gist: any) => (
        <div>
          <div>{gist.description}</div>
          <div>
            {Object.keys(gist.files).map((file) => (
              <div class="bg-black">
                <div>{gist.files[file].filename}</div>
                <div>
                  <div>{gist.files[file].content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
