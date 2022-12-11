import React from "react";
import Image from "next/image";
import notebook from "/public/static/notebook.png"

const books = [
  { title: 'The Kite Runner', author: 'Khaled Hosseini'},
  { title: 'The Outsiders', author: 'S.E. Hilton'},
  { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie'},
  { title: '1984', author: 'George Orwell'},
  { title: 'The Mistborn Trilogy', author: 'Brandon Sanderson'},
  { title: 'A Song of Ice and Fire', author: 'George R.R. Martin'},
]

export default function Books() {
  const listItems = books.map((book) =>
    <li className="border-0 border-solid rounded-lg p-4 transition hover:delay-700 hover:bg-gradient-to-r from-purple-200 to-purple-100 dark:hover:bg-gradient-to-r dark:from-purple-700 dark:to-purple-900">{book.title} by {book.author}</li>
  );

  return (
    <div className="flex max-w-2xl mx-auto flex-col py-8 sm:text-md">
      <div className="flex">
      <h1 className="text-bold dark:text-bold pr-4">Books</h1>
      <Image src={notebook} alt="book" width={50} height={50}/>
      </div>
      <br></br>
      <p>Currently reading <a className="italic text-purple-500 dark:text-purple-300" href="https://www.goodreads.com/book/show/7235533-the-way-of-kings">The Way of Kings</a></p>
      <ul className="mt-4">{listItems}</ul>
    </div>
  );
}
