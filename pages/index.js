import React from "react";
import Link from "next/link";
import ThemeChanger from "../components/ThemeChanger";

export default function Home() {
  return (
    <div className="flex max-w-2xl mx-auto flex-col dark:text-grayer">
      <div className="">
        <br></br>
        <h1 className="dark:text-white text-lg text-bold dark:text-bold">
          CJ Dunteman
        </h1>
        <p className="text-gray dark:text-darkGray">Madison, Wisconsin</p>
        <br></br>
        <br></br>
        <br></br>
        <p>About</p>
        <br></br>
        <p className="dark:text-lightGray">I'm a developer</p>
        <br></br>
        <br></br>
        <p>Contact</p>
        <br></br>
        <div className="grid grid-cols-12">
          <div className="grid col-span-3">
            <p>Email</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
          <div>
            <a href="mailto: hello@cjdunteman.com" className="text-bold">
              [redacted]
            </a>
            <p>
              <a href="https://twitter.com/cjdunteman">@cjdunteman</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/cjdunteman/">@cjdunteman</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
