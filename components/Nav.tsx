'use client'

import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import UserAvatar from "./Avatar"
import SignIn from "./SignIn"
import { useSession } from "next-auth/react";


export default function Nav() {
    const { data: session } = useSession()

    return (
        <nav className="flex justify-between items-center p-3 mt-2 mb-6 bg-black dark:bg-neutral-800 border rounded-md shadow-md border-black shadow-black dark:border-neutral-800 dark:shadow-black text-white dark:text-white">
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
                {session ? <UserAvatar avatar={session.user.image} /> : <SignIn />}
                <ThemeSwitch />
            </div>
        </nav>
    )
}