'use client'

import { getProviders } from "next-auth/react"
import { signIn } from "next-auth/react"

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

export default function SignIn({providers}: Props) {
    return <div>{Object.values(providers!).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
                ))}
            </div>
}