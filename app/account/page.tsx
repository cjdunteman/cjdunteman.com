import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "lib/auth"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Account',
    description: 'Account page.'
}

export default async function Account() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/account')
    }

    console.log(session)

    return (
        <div>
            <h1>Account Page</h1>
            <p>Hello</p>
        </div>
    )
}