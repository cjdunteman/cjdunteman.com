import Link from "next/link"
import ThemeSwitch from "app/ThemeSwitch"
// import AvatarDemo from "./avatar"

export default function nav() {
    return (
    <nav className="flex justify-between items-center p-3 mt-2 mb-6 bg-purple-100 dark:bg-purple-900 border rounded-md shadow-md border-purple-200 shadow-purple-200 dark:border-purple-800 dark:shadow-purple-800">
        <div className="flex gap-8">
        <Link
            href="/"
            className="text-purple-500 dark:text-purple-300 "
        >
            Home
        </Link>
        <Link
            href="/blog"
            className="text-purple-500 dark:text-purple-300"
        >
            Blog
        </Link>
        {/* <Link
            href="/projects"
            className="text-purple-500 dark:text-purple-300"
        >
            Projects
        </Link> */}
        {/* <div>
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
        </div> */}
        </div>
        {/* <AvatarDemo /> */}
        <ThemeSwitch />
    </nav>
    )
}