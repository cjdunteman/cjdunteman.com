import SignOut from "components/SignOut";
import { unstable_getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Account() {
    const session = await unstable_getServerSession
    if (!session) {
        redirect("https://www.cjdunteman.com")
    }

    return (
        <div>
            <h1></h1>
            <SignOut />
        </div>
    )
}