// Root Layout (required)
import "/styles/globals.css";
import { Inter } from '@next/font/google';
import { Providers } from './providers'
import Link from "next/link";
import Inspect from "inspx";
import ThemeSwitch from './ThemeSwitch'
import { AnalyticsWrapper } from './components/analytics'
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
        <body className="bg-white text-black dark:bg-black dark:text-white container mx-auto max-w-2xl min-h-screen">
            <Providers>
              <nav className="flex justify-between items-center py-6 mb-6 font-4xl">
                <div className="flex gap-8">
                  <Link
                    href="/"
                    className="text-gray hover:text-black dark:text-lightGray"
                  >
                    Home
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray dark:text-lightGray hover:text-black"
                  >
                    Blog
                  </Link>
                <div>
                  <button className="text-gray hover:text-black dark:text-lightGray peer">
                    Projects
                  </button>
                  <div
                    className="absolute left hidden peer-hover:flex hover:flex
                w-[200px]
                flex-col rounded-md"
                  >
                    <a
                      className="text-gray hover:text-black px-5 py-3 m-1 shadow-md rounded dark:bg-white"
                      href="https://frontend-mentor-challenges-rosy.vercel.app/"
                    >
                      Frontend Mentor
                    </a>
                  </div>
                  </div>
                </div>
                <ThemeSwitch />
              </nav>
              {children}
            </Providers>
            <AnalyticsWrapper />
            {/* <Footer /> */}
          </body>
      </html>
    );
  }