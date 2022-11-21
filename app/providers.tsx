'use client'

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes'

export function Providers({ session, children }: any ) {
  return (
      <ThemeProvider attribute="class">
        <SessionProvider>
          {children}
        </SessionProvider>
      </ThemeProvider>
  )
}