'use client'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function Providers({ children }: AuthContextProps) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class">{children}
      </ThemeProvider>
    </SessionProvider>
  )
}