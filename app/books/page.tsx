import React from "react";

export default function Books() {
  return (
    <div className="flex max-w-2xl mx-auto flex-col py-8">
      <h1 className="text-lg text-bold dark:text-bold">Books</h1>
      <hr className="text-lightGray dark:text-darkGray"></hr>
      <p>
        A list of some of my favorite books (or series), in no particular order.
      </p>
      <br></br>
      <p>
        The Kite Runner{" "}
        <span className="text-gray dark:text-darkGray">by Khaled Hosseini</span>
      </p>
      <p>
        The Outsiders{" "}
        <span className="text-gray dark:text-darkGray">by S.E. Hilton</span>
      </p>
      <p>
        How to Win Friends and Influence People{" "}
        <span className="text-gray dark:text-darkGray">by Dale Carnegie</span>
      </p>
      <p>
        1984{" "}
        <span className="text-gray dark:text-darkGray">by George Orwell</span>
      </p>
      {/* <p>Dune <span className="text-gray dark:text-darkGray">by Frank Herbert</span></p> */}
      <p>
        The Mistborn Trilogy{" "}
        <span className="text-gray dark:text-darkGray">
          by Brandon Sanderson
        </span>
      </p>
      <p>
        A Song of Ice and Fire{" "}
        <span className="text-gray dark:text-darkGray">
          by George R.R. Martin
        </span>
      </p>
      <p>
        Shoe Dog{" "}
        <span className="text-gray dark:text-darkGray">by Phil Knight</span>
      </p>
      <p>
        Principles: Life and Work{" "}
        <span className="text-gray dark:text-darkGray">by Ray Dalio</span>
      </p>
      <p>
        Quiet{" "}
        <span className="text-gray dark:text-darkGray">by Susan Cain</span>
      </p>
      <p>
        Outliers{" "}
        <span className="text-gray dark:text-darkGray">
          by Malcolm Gladwell
        </span>
      </p>
    </div>
  );
}
