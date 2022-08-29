import React from "react"

export default function Books() {
    return (
        <>
        <h1 className="text-4xl">
            Books
        </h1>
        <br></br>
        <p>A list of some of my favorite books (or series), sorted by genre and then the product of (recommended * obscurity).</p>
        <br></br>
        <h1>Historical Fiction</h1>
        <p>The Kite Runner <span className="text-gray">by Khaled Hosseini</span></p>
        <p>The Outsiders <span className="text-gray">by S.E. Hilton</span></p>
        <br></br>
        <h1>Sci-Fi</h1>
        <p>1984 <span className="text-gray">by George Orwell</span></p>
        <p>Dune <span className="text-gray">by Frank Herbert</span></p>
        <br></br>
        <p className="text-4xl">
            Fantasy
        </p>
        <p>The Mistborn Trilogy <span className="text-gray">by Brandon Sanderson</span></p>
        <p>A Song of Ice and Fire <span className="text-gray">by George R.R. Martin</span></p>
        <br></br>
        <h1>Biography</h1>
        <p>Shoe Dog <span className="text-gray">by Phil Knight</span></p>
        <p>Principles: Life and Work <span className="text-gray">by Ray Dalio</span></p>
        <br></br>
        <h1>Psychology</h1>
        <p>Quiet <span className="text-gray">by Susan Cain</span></p>
        <p>Outliers <span className="text-gray">by Malcolm Gladwell</span></p>
        <br></br>
        <h1>History</h1>
        <p>The Gulag Peninsula <span className="text-gray">by Aleksandr Solzhenitsyn</span></p>
        </>
    )
}