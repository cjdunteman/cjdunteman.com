// Root Layout (required)
import "../styles/globals.css";
import { Oswald } from '@next/font/google';
import { Providers } from './providers'
import Link from "next/link";
import Inspect from "inspx";
// import { SessionProvider } from "next-auth/react";

//TODO - font not working

const oswald = Oswald({
  variable: '--font-inter',
})

export default function RootLayout({ children }: {
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="bg-white text-black dark:bg-black dark:text-white ${inter.variable} font-sans container mx-auto max-w-3xl">
            <Providers>
            <nav className="flex justify-between items-center py-6 font-4xl">
      {/* <ThemeSwitch className="" /> */}
      <div className="flex gap-8">
        <Link
          href="/"
          className="text-gray hover:text-black dark:text-lightGray"
        >
          {/* <a className="text-gray hover:text-black dark:text-lightGray">Home</a> */}
          Home
        </Link>
        <Link
          href="/blog"
          className="text-gray dark:text-lightGray hover:text-black"
        >
          {/* <a className="text-gray dark:text-lightGray hover:text-black">Blog</a> */}
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
      <div className="rounded-md p-2">
        <a
          href="mailto: hello@cjdunteman.com"
          className="text-gray dark:text-lightGray hover:text-black text-bold"
        >
          Contact
        </a>
      </div>
    </nav>
              {children}
            </Providers>
          </body>
      </html>
    );
  }