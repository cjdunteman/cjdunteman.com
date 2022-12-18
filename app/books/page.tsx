import EditBooks from "components/EditBooks";
import { unstable_getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "pages/api/auth/[...nextauth]";
import notebook from "/public/static/notebook.png"

// const books = [
//   { title: 'The Kite Runner', author: 'Khaled Hosseini'},
//   { title: 'The Outsiders', author: 'S.E. Hilton'},
//   { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie'},
//   { title: '1984', author: 'George Orwell'},
//   { title: 'The Mistborn Trilogy', author: 'Brandon Sanderson'},
//   { title: 'A Song of Ice and Fire', author: 'George R.R. Martin'},
// ]

async function getBooks() {
  const res = await fetch('https://www.cjdunteman.com/api/books', {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
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

  const listItems = books.map((book) =>
    <li className="border-0 border-solid rounded-lg p-4 transition hover:delay-700 hover:bg-gradient-to-r from-purple-200 to-purple-100 dark:hover:bg-gradient-to-r dark:from-purple-700 dark:to-purple-900">{book.title} by {book.author}</li>
  );

  return (
    <div className="flex max-w-2xl mx-auto flex-col py-8 sm:text-md">
      <div className="flex">
      <h1 className="text-bold dark:text-bold pr-4">Books</h1>
      {/* { session?.user?.email === "cjdunteman@gmail.com" ? <EditBooks /> : null} */}
      <Image src={notebook} alt="book" width={50} height={50}/>
      </div>
      {/* <EditBooks /> */}
      { session?.user?.email === "cjdunteman@gmail.com" ? <EditBooks /> : null}
      <br></br>
      <p>Currently reading <a className="italic text-purple-500 dark:text-purple-300" href="https://www.goodreads.com/book/show/7235533-the-way-of-kings">The Way of Kings</a></p>
      <ul className="mt-4">{listItems}</ul>
    </div>
  );
}
