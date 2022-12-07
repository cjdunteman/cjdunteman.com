'use client'
import { signIn, signOut } from "next-auth/react"

// export default function SignIn() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

import { unstable_getServerSession } from "next-auth/next"

export default async function SignIn() {
  const session = await unstable_getServerSession()
  
    if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}