'use client'

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from 'next/image'
import nextjs from 'public/static/nextjs-icon-light-background.png'
import vercel from 'public/static/vercel-icon-light.png'
import notion from 'public/static/notion-logo-no-background.png'
import vscode from 'public/static/vs_code.png'
import brave from 'public/static/brave-browser-icon.png'
import figma from 'public/static/figma.png'
import github from 'public/static/github.png'

const tools = [
  { id: 1, name: 'VSCode', link: 'https://code.visualstudio.com/', image: vscode, desc: 'Text Editor' },
  { id: 2, name: 'Brave', link: 'https://brave.com/', image: brave, desc: 'Web Browser' },
  { id: 3, name: 'Figma', link: 'https://www.figma.com/', image: figma, desc: 'Web Design' },
  { id: 4, name: 'Notion', link: 'https://www.notion.so/', image: notion, desc: 'Project Management' },
  { id: 5, name: 'GitHub', link: 'https://github.com/', image: github, desc: 'Repo Hosting' },
  { id: 6, name: 'Next.js', link: 'https://nextjs.org/', image: nextjs, desc: 'Framework' },
  { id: 7, name: 'TailwindCSS', link: 'https://tailwindcss.com/', image: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg', desc: 'CSS Framework' },
  { id: 8, name: 'Vercel', link: 'https://vercel.com/home', image: vercel, desc: 'Deployment' },
]

export default function Uses() {

  const listItems = tools.map((tool) =>
    <div>
      <a href={tool.link}>
        <li key={tool.id} className="flex border-0 border-solid rounded-lg p-4 transition hover:delay-700 hover:bg-gradient-to-r from-purple-200 to-purple-100 dark:hover:bg-gradient-to-r dark:from-purple-700 dark:to-purple-900">
          <div className="pr-4"><Image src={tool.image} width={32} height={32} alt={tool.name} />
          </div>
          <div className="flex flex-col">
            <div>
              <p className="font-semibold">{tool.name}</p>
            </div>
            <div>
              <p className="text-darkGray">{tool.desc}</p>
            </div>
          </div>
        </li>
      </a>
    </div>
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