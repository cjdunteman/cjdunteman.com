'use client'

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const tools = [
  { name: 'Next.js', link: 'https://nextjs.org/'},
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/'},
  { name: 'Vercel', link: 'https://vercel.com/home'},
  { name: 'VSCode', link: 'https://code.visualstudio.com/'},
  { name: 'Brave', link: 'https://brave.com/'},
  { name: 'Figma', link: 'https://www.figma.com/'},
  { name: 'Raycast', link: 'https://www.raycast.com/'},
  { name: 'Mem', link: 'https://get.mem.ai/'},
]

export default function Uses() {

  const listItems = tools.map((tool) =>
  <a href={tool.link}><li className="flex border-0 border-solid rounded-lg p-4 transition hover:delay-700 hover:bg-gradient-to-r from-purple-200 to-purple-100 dark:hover:bg-gradient-to-r dark:from-purple-700 dark:to-purple-900">{tool.name}<ArrowTopRightIcon/></li></a>
  );

  return (
    <div className="flex max-w-2xl mx-auto flex-col">
      <h1>Uses</h1>
      <br></br>
      <p>Tools and apps that I use.</p>
      <br></br>
      <ul className="mt-4">{listItems}</ul>
      </div>
  );
}