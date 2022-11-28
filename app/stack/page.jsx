'use client'

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Stack() {
  return (
    <div className="flex max-w-2xl mx-auto flex-col">
      <h1>Stack</h1>
      <hr className="text-lightGray dark:text-darkGray"></hr>
      <p>Tools and apps that I use.</p>
      <br></br>
      <p>
        <a href="https://nextjs.org/" className="flex">
          Next.js
          <ArrowTopRightIcon />
        </a>
      </p>
      <p>
        <a href="https://tailwindcss.com/" className="flex">
          TailwindCSS
          <ArrowTopRightIcon />
        </a>
      </p>
      <p>
        <a href="https://vercel.com/home" className="flex">
          Vercel
          <ArrowTopRightIcon />
        </a>
      </p>
      <p>
        <a href="https://code.visualstudio.com/" className="flex">
          VS Code
          <ArrowTopRightIcon />
        </a>
      </p>
      <p>
        <a href="https://www.figma.com/" className="flex">
          Figma
          <ArrowTopRightIcon />
        </a>
      </p>
      <p>
        <a href="https://www.raycast.com/" className="flex">
          Raycast
          <ArrowTopRightIcon />
        </a>
      </p>
      <p>
        <a href="https://get.mem.ai/" className="flex">
          Mem
          <ArrowTopRightIcon />
        </a>
      </p>
    </div>
  );
}