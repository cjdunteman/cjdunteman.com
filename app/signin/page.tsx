import { signIn } from "next-auth/react"
import SignIn from "components/SignIn"

export default function signInPage() {
    return (
        <div>
            <h1>Sign In</h1>
            <SignIn />
        </div>
    )
}