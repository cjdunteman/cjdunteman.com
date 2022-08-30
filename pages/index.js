import React from "react";
import Link from "next/link";
import ThemeChanger from "../components/ThemeChanger";

export default function Home() {
  return (
    <div className="flex max-w-2xl mx-auto flex-col py-8 gap-16">
      <div>
        <h1 className="text-black font-semibold dark:text-white text-lg text-bold dark:text-bold">
          CJ Dunteman
        </h1>
        <p className="text-gray dark:text-lightGray">Madison, Wisconsin</p>
      </div>
      <div className="text-gray dark:text-lightGray">
        <p className="text-black font-semibold dark:text-white">About</p>
        <p>I code things.</p>
        <br></br>
        <p>
          I currently use Next.js with TaildwindCSS for all of my web dev
          projects. Depending on the requirements I'll add Turborepo on top of
          that.{" "}
        </p>
        <br></br>
        <p>
          If you would like to work with me on your new web project, please
          reach out.
        </p>
      </div>
      <div>
        <p className="font-semibold">Contact</p>
        <br></br>
        <div className="grid grid-cols-12 text-gray dark:text-lightGray">
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
