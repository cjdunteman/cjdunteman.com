import EditBooks from "components/EditBooks";
import { unstable_getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "pages/api/auth/[...nextauth]";
import notebook from "/public/static/notebook.png"
import Link from "next/link";

async function getBooks() {
  const res = await fetch('https://cjdunteman.com/api/books', {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
    cache: "no-store"
  })

  if (!res.ok) {
    // Activate closest `error.js` Error boundary
    throw new Error('Failed to fetch books')
  }

  const books = await res.json()

  return books
}

export default async function Books() {
  const books = await getBooks();
  const session = await unstable_getServerSession(authOptions)
  let role: string;

  if (session?.user?.email === "cjdunteman@gmail.com") {
    role = "admin";
  }

  const listItems = books.map((book) =>
    <div>
      <Link href={`books/` + book.id}>
        <li key={book.id} className="border-0 border-solid rounded-lg p-4 transition hover:delay-700 hover:bg-gradient-to-r from-purple-200 to-purple-100 dark:hover:bg-gradient-to-r dark:from-purple-700 dark:to-purple-900">{book.title} by {book.author}
        </li>
      </Link>
    </div >
  );

  const reading = await prisma.book.findMany({
    where: {
      status: 'READING',
    }
  })

  return (
    <div className="flex max-w-2xl mx-auto flex-col py-8 sm:text-md">
      <div className="flex">
        <h1 className="text-bold dark:text-bold pr-4">Books</h1>
        <Image src={notebook} alt="book" width={50} height={50} />
      </div>
      {role === "admin" ? <EditBooks /> : null}
      <br></br>
      <p>Currently reading <Link href={`books/` + reading[0].id} className="italic text-purple-500 dark:text-purple-300">{reading[0].title}</Link></p>
      <ul className="mt-4">{listItems}</ul>
    </div>
  );
}
