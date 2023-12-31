import React from "react";
import contacts from "./contactList";
import { FaClipboard } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-bg_h w-full justify-center items-center pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-8 border-b-2 border-b-fg3 flex justify-between">
          <p className="text-4xl font-bold">Contact Info</p>
          <p className="text-sm text-fg3">Let's get in touch!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {contacts.map((item) => (
            <a
              href={item.href}
              className={"flex justify-between items-center w-full text-xs"}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={
                  "group items-center text-center mx-8 my-4 rounded-xl shadow-md px-4 py-4 max-w-[180px] hover:scale-105 transition-all " +
                  item.style
                }
                onClick={() => navigator.clipboard.writeText(item.label)}
              >
                {item.altChild}
                <p className="truncate ..">{item.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
