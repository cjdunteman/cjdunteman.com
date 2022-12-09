// Root Layout (required)
import "/styles/globals.css";
import { Inter } from '@next/font/google';
// import { Providers } from './providers'
import { AnalyticsWrapper } from '../components/analytics'
import Nav from '../components/Nav'
import { unstable_getServerSession } from "next-auth";
// import { authOptions } from "pages/api/auth/[...nextauth]";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"]
})

export default async function RootLayout({ 
  children, }: {
    children: React.ReactNode; 
  }) {
    const session = await unstable_getServerSession()

  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
    return (
      <html lang="en" className={`${inter.variable} font-sans min-h-full`}>
        <body className="text-black dark:text-white bg-white dark:bg-dark container mx-auto max-w-2xl min-h-screen px-2">
          <Providers session={session}>
              <Nav />
              {children}
            <AnalyticsWrapper />
          </Providers>
          </body>
      </html>
    );
  }