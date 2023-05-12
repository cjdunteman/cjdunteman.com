import SignOut from "components/SignOut";
import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "app/api/auth/[...nextauth]";

export default async function Account() {
    const session = await unstable_getServerSession(authOptions);
    if (!session) {
        redirect("https://cjdunteman.com/")
    }
    console.log(session);

    return (
        <div>
            <h1>Account</h1>
            <SignOut />
        </div>
    )
}