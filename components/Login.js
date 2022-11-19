import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Component() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
