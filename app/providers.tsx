'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ session, children }: any ) {
  return (
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
  )
}