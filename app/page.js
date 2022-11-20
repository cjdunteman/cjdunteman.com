import React from "react";
// import Link from "next/link";
import Skills from "./Skills";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-black font-semibold dark:text-white text-lg text-bold dark:text-bold">
          CJ Dunteman
        </h1>
        <p className="text-gray dark:text-lightGray">Madison, Wisconsin</p>
        <br></br>
      </div>
      <div className="text-gray dark:text-lightGray">
        <p className="text-black font-semibold dark:text-white">About</p>
        <p>I like to code, learn about all things tech, and ski.</p>
        <br></br>
        <p>
          The programming languages I am most comfortable with are JavaScript
          and Python. For front-end web dev I like to use Next.js with
          TailwindCSS.
        </p>
        <br></br>
        <p>
          I am looking for new opportunities, please reach out if you are
          interested in talking with me.
        </p>
      </div>
      <br></br>
      <Skills />
      <div>
        <br></br>
        <p className="text-black font-semibold dark:text-white">Contact</p>
        <div className="grid grid-cols-12 text-gray dark:text-lightGray">
          <div className="grid col-span-3">
            <p>Email</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
          <div className="">
            <a
              href="mailto: hello@cjdunteman.com"
              className="text-bold hover:text-blue"
            >
              hello@cjdunteman.com
            </a>
            <p>
              <a
                href="https://twitter.com/cjdunteman"
                className="text-bold hover:text-blue"
              >
                @cjdunteman
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/cjdunteman/"
                className="text-bold hover:text-blue"
              >
                @cjdunteman
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
