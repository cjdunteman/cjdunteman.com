'use client'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"

export function Providers({ session, children }: any ) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}