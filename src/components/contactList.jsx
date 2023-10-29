import { FaDiscord, FaGithub, FaInstagram, FaMailBulk } from "react-icons/fa";

const contacts = [
  {
    id: 1,
    child: (
      <>
        GitHub
        <FaGithub size={30} />
      </>
    ),
    altChild: (
      <>
        <FaGithub size={150} />
        GitHub
      </>
    ),
    href: "https://github.com/Joskul",
    style: "bg-bg_h",
    label: "Joskul",
  },
  {
    id: 2,
    child: (
      <>
        Discord
        <FaDiscord size={30} />
      </>
    ),
    altChild: (
      <>
        <FaDiscord size={150} />
        Discord
      </>
    ),
    href: "https://discordapp.com/users/337133114436354058",
    style: "bg-blueDim",
    label: "spudstr3",
  },
  {
    id: 3,
    child: (
      <>
        Instagram
        <FaInstagram size={30} />
      </>
    ),
    altChild: (
      <>
        <FaInstagram size={150} />
        Instagram
      </>
    ),
    href: "https://www.instagram.com/kurvidh",
    style: "bg-red",
    label: "kurvidh",
  },
  {
    id: 4,
    child: (
      <>
        KMUTT-Mail
        <FaMailBulk size={30} />
      </>
    ),
    altChild: (
      <>
        <FaMailBulk size={150} />
        KMUTT-Mail
      </>
    ),
    href: "mailto:korawit.kura@mail.kmutt.ac.th",
    style: "bg-orangeDim",
    label: "korawit.kura@mail.kmutt.ac.th",
  },
];

export default contacts;
