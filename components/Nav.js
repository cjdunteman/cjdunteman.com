import Link from "next/link";
import ThemeSwitch from "./ThemeChanger";

export default function Nav({}) {
  return (
    <nav className="flex justify-between items-center py-6 font-4xl">
      <ThemeSwitch className="" />
      <div className="flex gap-8">
        <Link href="/">
          <a className="text-gray hover:text-black dark:text-lightGray">Home</a>
        </Link>
        <Link href="/blog">
          <a className="text-gray dark:text-lightGray hover:text-black">Blog</a>
        </Link>
        <div>
          <button className="text-gray hover:text-black dark:text-lightGray peer">
            Projects
          </button>
          <div
            className="absolute left hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col rounded-md"
          >
            <a
              className="text-gray hover:text-black px-5 py-3 m-1 shadow-md rounded dark:bg-white"
              href="https://frontend-mentor-challenges-rosy.vercel.app/"
            >
              Frontend Mentor
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-md p-2">
        <a
          href="mailto: hello@cjdunteman.com"
          className="text-gray dark:text-lightGray hover:text-black text-bold"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
