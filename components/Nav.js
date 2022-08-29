import Link from "next/link";

export default function Nav({}) {
  return (
    <nav className="flex justify-between items-center py-6 font-4xl">
      <div>
        <h1 className="text-4xl">CJ</h1>
      </div>
      <div className="flex gap-4">
        <Link href="/" activeClassName="font-semibold">
          <a>Home</a>
        </Link>
        <Link href="/blog" activeClassName="font-semibold">
          <a>Blog</a>
        </Link>
        {/* <Link to="/projects">Project</Link> */}
      </div>
      <div className="bg-green-light rounded-md p-2">
        <a href="mailto: hello@cjdunteman.com">Contact</a>
      </div>
    </nav>
  );
}
