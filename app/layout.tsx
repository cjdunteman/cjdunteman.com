// Root Layout (required)
import "/styles/globals.css";
import { Inter } from '@next/font/google';
import { AnalyticsWrapper } from '../components/analytics'
import Nav from '../components/Nav'
import { unstable_getServerSession } from "next-auth";
import Providers from "./providers";
import { authOptions } from "pages/api/auth/[...nextauth]";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"]
})

export interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
    const session = await unstable_getServerSession(authOptions)

  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
    return (
      <html lang="en" className={`${inter.variable} font-sans min-h-full`}>
        <body className="text-black dark:text-white bg-white dark:bg-dark container mx-auto max-w-2xl min-h-screen px-2">
          <Providers>
              <Nav />
              {children}
            {/* <AnalyticsWrapper /> */}
          </Providers>
          </body>
      </html>
    );
  }