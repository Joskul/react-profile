import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const menu = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "repos",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-gradient-to-b from-bg_s to-bg-[transparent]">
      <div className="flex w-full">
        {/* <h1 className="text-5xl font-signature ml-2">Kurvidah</h1> */}
        <ReactTypingEffect
          text="Kurvidah"
          className="text-5xl font-signature ml-2 text-yellow"
          speed="100"
          cursor="_"
        />
      </div>
      <ul className="hidden md:flex">
        {menu.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-fg3 hover:text-fg transition-all"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-fg3 hover:text-fg transition-all md:hidden"
      >
        {nav ? <FaTimes size="30" /> : <FaBars size="30" />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-bg_h to-bg_s">
          {menu.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-fg3 hover:text-5xl hover:text-fg transition-all"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
