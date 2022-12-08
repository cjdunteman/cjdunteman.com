import Link from "next/link"
import ThemeSwitch from "app/ThemeSwitch"
import UserAvatar from "./Avatar"
import SignIn from "./SignIn"
import { unstable_getServerSession } from "next-auth";


export default function Nav() {
    const session = unstable_getServerSession()

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
        </div>
        <div className="flex gap-4">
            {session ? <SignIn /> : <UserAvatar />}
            <ThemeSwitch />
        </div>
        {/* <AvatarDemo /> */}
    </nav>
    )
}