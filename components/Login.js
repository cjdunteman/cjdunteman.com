import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <a href="/api/auth/signin">Sign in</a>
    </>
  );
}
