import Link from "next/link"
import ThemeSwitch from "app/ThemeSwitch"
// import AvatarDemo from "./avatar"

export default function nav() {
    return (
    <nav className="flex justify-between items-center p-3 mt-2 mb-6 text-black dark:text-white bg-purple-900 dark:bg-purple-100 border rounded-md shadow-md border-purple-600 shadow-purple-600 dark:border-purple-400 dark:shadow-purple">
        <div className="flex gap-8">
        <Link
            href="/"
            className="hover:text-purple-600 dark:hover:text-purple-800"
        >
            Home
        </Link>
        <Link
            href="/blog"
            className="hover:text-purple-600 dark:hover:text-purple-800"
        >
            Blog
        </Link>
        <div>
            <button className="hover:text-purple-600 dark:hover:text-purple-800">
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