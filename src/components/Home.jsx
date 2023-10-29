import React from "react";
import profilePic from "../assets/pic.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-bg_s to-bg_h"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2 className="text-4xl sm:text-7xl font-bold inline">
            I'm dumb as a{" "}
            <div className="text-orange font-signature">sausage roll™️✨</div>
          </h2>
          <p className="text-fg2 py-4 maxw">I make cool and fun stuff</p>

          <div>
            <Link to={"about"} smooth duration={500}>
              <button className="group text-yellowDim font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-bg_h cursor-pointer">
                Wanna check it out? 😏
                <span className="group-hover:rotate-90 transition-all ml-1">
                  <FaArrowRight size="15" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={profilePic}
            alt="Pfp here"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
