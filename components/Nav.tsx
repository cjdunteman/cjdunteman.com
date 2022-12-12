'use client'

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import UserAvatar from "./Avatar"
import SignIn from "./SignIn"
import { useSession } from "next-auth/react";


export default function Nav() {
    const { data: session } = useSession()

    return (
    <nav className="flex justify-between items-center p-3 mt-2 mb-6 bg-purple-100 dark:bg-purple-900 border rounded-md shadow-md border-purple-200 shadow-purple-200 dark:border-purple-800 dark:shadow-purple-800 text-purple-500 dark:text-purple-300">
        <div className="flex gap-8">
            <Link
                href="/"
            >
                Home
            </Link>
            <Link
                href="/blog"
            >
                Blog
            </Link>
        </div>
        <div className="flex gap-4">
            {session ? <UserAvatar avatar={session.user.image}/> : <SignIn />}
            <ThemeSwitch />
        </div>
    </nav>
    )
}