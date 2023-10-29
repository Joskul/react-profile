import React from "react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Repositories = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const githubUser = "Joskul";

  const fetchData = () => {
    return fetch(
      `https://api.github.com/users/${githubUser}/repos?per_page=100`
    )
      .then((response) => response.json())
      .then((data) => setGithubRepos(data));
  };

  console.log(githubRepos);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      name="repos"
      className="bg-bg_h w-full min-h-screen"
      onLoad={fetchData}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8 border-b-2 border-b-fg3 flex justify-between">
          <p className="text-4xl font-bold">My Repositories</p>
          <p className="text-sm text-fg3">stuff I made mostly for fun 😉</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {githubRepos.map((repo) => (
            <div className="shadow-sm rounded-md bg-bg_h">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <img
                  src={
                    "https://opengraph.githubassets.com/7cbf58d9fc88a867d3868eb99a4f820af26f9c736452f7871076b0ca9a808277/" +
                    repo.full_name
                  }
                  alt="Rich Text"
                  className="rounded-md hover:scale-105 transition-all"
                ></img>
              </a>
              <div className="flex items-center justify-between">
                <p className="truncate ... text-sm">{repo.name}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <button className="flex items-center bg-yellowDim mx-4 my-4 px-6 py-3 rounded-md hover:scale-105 hover:bg-yellow hover:text-bg3 transition-all">
                    Repo <FaGithub size={30} className="pl-2" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
