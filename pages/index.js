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
        <p className="dark:text-lightGray">
          I am a developerI am a developer. I am a developerI am a developerI am
          a developerI am a developerI am a developerI am a developerI am a
          developer.
        </p>
      </div>
    </div>
  );
}
