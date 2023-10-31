import React from "react";

const About = () => {
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  return (
    <div name="about" className="w-full bg-bg_h">
      <div className="max-w-screen-lg min-h-screen p-4 mx-auto flex flex-col justify-start w-full h-full">
        <div className="mb-8 border-b-2 border-b-fg3 flex justify-between">
          <p className="text-4xl font-bold">About Me</p>
        </div>
        <p className="text-xl">
          "Korawit Hikaru Kurakake" An earnest {getAge("2004-09-25")}-year-old
          who aims to enlight himself, hoping he could discover something
          profound no one has yet discovered in pursuit of serving the public
          with technology.
        </p>
        <br />
        <p className="text-sm text-fg2 text-center">
          Ladies and gentlemen, in the grand tapestry of life, I am but a humble
          computer engineering student, navigating the labyrinth of logic and
          technology. My journey through the realms of circuits and algorithms
          has been a symphony of curiosity and relentless determination. Like a
          masterful storyteller, I have woven my tale, chapter by chapter,
          within the digital world, harnessing the power of ones and zeros to
          breathe life into the machines that surround us. With the wisdom of
          experience, I have learned that in this ever-evolving landscape of
          innovation, the quest for knowledge is an eternal odyssey. Join me, as
          I embark on this adventure to unravel the mysteries of our digital
          universe, for, as the venerable Morgan Freeman might say, "The pursuit
          of knowledge is the essence of human existence, and I am but a
          traveler on that remarkable path."
        </p>
      </div>
    </div>
  );
};

export default About;
