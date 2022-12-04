import React from "react";

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
      <h1 className="text-bold dark:text-bold">Books</h1>
      {/* <hr className="text-lightGray dark:text-darkGray"></hr> */}
      <ul className="mt-4">{listItems}</ul>
    </div>
  );
}
