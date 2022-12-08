'use client'
import { signOut } from "next-auth/react"
import { redirect } from 'next/navigation'

async function handleClick() {
    signOut({ callbackUrl: "/"})
    console.log("executed")
    redirect("/")
}

export default function SignOut() {
    return (
        <>
          <button onClick={handleClick}>Sign out</button>
        </>
    )
}