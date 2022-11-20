'use client'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"

export function Providers({ session, children }: any ) {
  return (
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
  )
}