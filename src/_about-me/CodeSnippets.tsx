import { useEffect, useState } from "preact/hooks";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github-dark-dimmed.css";
import axios from "axios";
import devInfo from "../../devInfo.json";

hljs.registerLanguage("typescript", typescript);

export default function CodeSnippets() {
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
  hljs.initHighlightingOnLoad();

  return (
    <>
      <div className="flex flex-col p-4">
        <div>Code snippet showcase:</div>
        {gistData.map((gist: any) => (
          <div>
            <div>{gist.description}</div>
            <div>
              {Object.keys(gist.files).map((file) => (
                <div class="bg-black">
                  <pre key={file}>
                    <code class="language-typescript bg-black">
                      {gist.files[file].content}
                    </code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
