import ArrowTopRight from "@radix-ui/react-icons";

export default function Stack() {
  return (
    <div className="flex max-w-2xl mx-auto flex-col">
      <h1>Stack</h1>
      <hr className="text-lightGray dark:text-darkGray"></hr>
      <p>Tools and apps that I use.</p>
      <br></br>
      <p>
        <a href="https://nextjs.org/">
          Next.js
          <ArrowTopRight />
        </a>
      </p>
      <p>
        <a href="https://tailwindcss.com/">
          TailwindCSS
          <ArrowTopRight />
        </a>
      </p>
      <p>
        <a href="https://vercel.com/home">
          Vercel
          <ArrowTopRight />
        </a>
      </p>
      <p>VS Code</p>
      <p>
        <a href="https://www.figma.com/">
          Figma
          <ArrowTopRight />
        </a>
      </p>
      <p>
        <a href="https://www.raycast.com/">
          Raycast
          <ArrowTopRight />
        </a>
      </p>
      <p>
        <a href="https://get.mem.ai/">
          Mem
          <ArrowTopRight />
        </a>
      </p>
    </div>
  );
}
