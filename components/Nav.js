import Link from "next/link";
// import Dropdown from "../components/Dropdown";
import ThemeSwitch from "./ThemeChanger";

export default function Nav({}) {
  return (
    <nav className="flex justify-between items-center py-6 font-4xl">
      <ThemeSwitch className="" />
      <div className="flex gap-8">
        <Link href="/" activeClassName="font-semibold">
          <a className="hover:underline decoration-gray">Home</a>
        </Link>
        <Link href="/blog" activeClassName="font-semibold">
          <a className="hover:underline decoration-gray">Blog</a>
        </Link>
        <div>
          <button className="peer">Projects</button>
          <div
            className="absolute left hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-green-light rounded-md"
          >
            <a
              className="px-5 py-3"
              href="https://frontend-mentor-challenges-rosy.vercel.app/"
            >
              Frontend Mentor
            </a>
          </div>
        </div>
      </div>
      <div className="bg-green-light rounded-md p-2">
        <a href="mailto: hello@cjdunteman.com" className="text-bold">
          Contact
        </a>
      </div>
    </nav>
  );
}
