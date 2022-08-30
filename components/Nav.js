import Link from "next/link";
// import Dropdown from "../components/Dropdown";

export default function Nav({}) {
  return (
    <nav className="flex justify-between items-center py-6 font-4xl">
      <div className="">
        <h1 className="text-4xl">CJ</h1>
      </div>
      <div className="flex gap-4">
        <Link href="/" activeClassName="font-semibold">
          <a>Home</a>
        </Link>
        <Link href="/blog" activeClassName="font-semibold">
          <a>Blog</a>
        </Link>
        {/* <Dropdown href="/">Projects</Dropdown> */}
        <div>
          <button className="peer bg-green-600 hover:bg-green-700">
            Projects
          </button>
          <div
            className="absolute left hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
          >
            <a
              className="px-5 py-3 hover:bg-gray-200"
              href="https://frontend-mentor-challenges-rosy.vercel.app/"
            >
              Frontend Mentor
            </a>
          </div>
        </div>
      </div>
      <div className="bg-green-light rounded-md p-2">
        <a href="mailto: hello@cjdunteman.com">Contact</a>
      </div>
    </nav>
  );
}
