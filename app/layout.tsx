// Root Layout (required)
import "/styles/globals.css";
import { Inter } from '@next/font/google';
import { Providers } from './providers'
import Link from "next/link";
import Inspect from "inspx";
import ThemeSwitch from './ThemeSwitch'
import { AnalyticsWrapper } from './components/analytics'
import Nav from './components/nav'
import Footer from "./footer";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"]
})

export default async function RootLayout({ 
  children, }: {
    children: React.ReactNode; 
  }) {

  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
    return (
      <html lang="en" className={`${inter.variable} font-sans min-h-full`}>
        <body className="text-black dark:text-white bg-white dark:bg-dark container mx-auto max-w-2xl min-h-screen px-2">
            <Providers>
              <Nav />
              {children}
            </Providers>
            <AnalyticsWrapper />
            {/* <Footer /> */}
          </body>
      </html>
    );
  }