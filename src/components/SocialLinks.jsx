import React from "react";
import contacts from "./contactList";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {contacts.map(({ id, child, href, style }) => (
          <li
            id={id}
            className={
              "flex justify-between items-center h-14 w-40 pl-6 pr-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] transition-all " +
              style +
              (id === 1
                ? " rounded-tr-md"
                : id === contacts.length
                ? " rounded-br-md"
                : "")
            }
          >
            <a
              href={href}
              className={"flex justify-between items-center w-full text-xs"}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
