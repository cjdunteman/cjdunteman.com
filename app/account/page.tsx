import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Account(req, res) {
    const session = await getServerSession(req, res, authOptions)

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