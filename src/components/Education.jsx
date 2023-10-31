import React from "react";

const Education = () => {
  const institutes = [
    {
      id: 1,
      title: "King Mongkut's University of Technology Thonburi",
      url: "https://kmutt.ac.th",
      date: "2022 - current",
      thumbnail:
        "https://www.kmutt.ac.th/wp-content/uploads/2020/09/KMUTT_CI_Semi_Logo-normal-full-1061x1200.png",
    },
    {
      id: 1,
      title: "Chonradsadornumrung School",
      url: "https://cru.ac.th",
      date: "2017 - 2022",
      thumbnail: "https://www.cru.ac.th/images/crulogo.png",
    },
  ];
  return (
    <div
      name="education"
      className="bg-bg_h w-full justify-center items-center pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8 border-b-2 border-b-fg3 flex justify-between">
          <p className="text-4xl font-bold">Education</p>
        </div>

        <div className="lg:flex lg:flex-row justify-center">
          {institutes.map((item) => (
            <div className="group justify-center object-contain rounded-md shadow-md m-4 p-8">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="mx-auto group-hover:scale-105 transition-all"
                ></img>
              </a>
              <h1 className="text-4xl font-bold pb-4 mb-auto">{item.title}</h1>
              <p className="">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
