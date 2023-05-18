// Root Layout (required)
import "/styles/globals.css";
import { Inter } from '@next/font/google';
import { AnalyticsWrapper } from '../components/analytics'
import Nav from '../components/Nav'
import Providers from "./providers";
import CommandBar from "components/CommandBar";
import { Metadata } from "next";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    default: 'CJ Dunteman',
    template: '%s | CJ Dunteman',
  },
  description: 'My personal website',

}

export interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: LayoutProps) {
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  return (
    <html lang="en" className={`${inter.variable} font-sans min-h-full`}>
      <body className="text-black dark:text-white bg-neutral-50 dark:bg-neutral-900  min-h-screen px-2">
        <Providers>
          <CommandBar />
          <div className="container mx-auto max-w-2xl">
            <Nav />
            {children}
          </div>
          <AnalyticsWrapper />
        </Providers>
      </body>
    </html>
  );
}