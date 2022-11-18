// Root Layout (required)
import "../styles/globals.css";
import { Oswald } from '@next/font/google';

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
        <body className="bg-white text-black dark:bg-black dark:text-white ${inter.variable} font-sans">{children}</body>
      </html>
    );
  }