import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";

function Skills() {
  const skills = [
    {
      id: 1,
      label: "C++",
      stats: "Pretty Good! 👍",
      value: 75,
      child: <TbBrandCpp size={80} />,
    },
    {
      id: 2,
      label: "Python",
      stats: "Kinda Alright 👌",
      value: 60,
      child: <FaPython size={80} />,
    },
    {
      id: 3,
      label: "React",
      stats: "OK...?",
      value: 50,
      child: <FaReact size={80} />,
    },
    {
      id: 4,
      label: "Flutter",
      stats: "Fine.",
      value: 50,
      child: <BiLogoFlutter size={80} />,
    },
  ];

  return (
    <div name="skills" className="bg-bg_h w-full pt-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8 border-b-2 border-b-fg3 flex justify-between">
          <p className="text-4xl font-bold">Skills</p>
          <p className="text-sm text-fg3">Pretty much all I can do 😔</p>
        </div>
        {skills.map((item) => (
          <div className="lg:flex justify-center items-center mx-4 my-4">
            <div className="lg:text-center">
              {item.child}
              <p className="text-fg3">{item.label}</p>
            </div>
            <div className="w-full text-right">
              <div className="w-full bg-bg_s rounded-full h-2.5 ml-4 mb-2">
                <div
                  className="bg-orange h-2.5 rounded-full"
                  style={{ width: item.value + "%" }}
                ></div>
              </div>
              <p>{item.stats}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
