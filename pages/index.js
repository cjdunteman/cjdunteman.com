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
          The PLs I am most comfortable with are C and Python. For web dev projects I use Next.js with TaildwindCSS.
        </p>
        <br></br>
        <p>
          I am looking for new opportunities, please reach out if you are interested in talking with me.
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
          <div className="">
            <a href="mailto: hello@cjdunteman.com" className="text-bold hover:text-blue">
              hello@cjdunteman.com
            </a>
            <p>
              <a href="https://twitter.com/cjdunteman" className="text-bold hover:text-blue">@cjdunteman</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/cjdunteman/" className="text-bold hover:text-blue">@cjdunteman</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
