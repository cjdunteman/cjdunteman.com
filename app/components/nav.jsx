import Link from "next/link"
import ThemeSwitch from "app/ThemeSwitch"
// import AvatarDemo from "./avatar"

export default function nav() {
    return (
    <nav className="flex justify-between items-center py-6 mb-6 font-4xl text-black dark:text-white">
        <div className="flex gap-8">
        <Link
            href="/"
            className="hover:text-black"
        >
            Home
        </Link>
        <Link
            href="/blog"
            className=""
        >
            Blog
        </Link>
        <div>
            <button className="">
            Projects
            </button>
            <div
            className="absolute left hidden peer-hover:flex hover:flex w-[200px] flex-col rounded-md"
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
        {/* <AvatarDemo /> */}
        <ThemeSwitch />
    </nav>
    )
}