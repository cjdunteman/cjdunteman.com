import { StarIcon } from "@heroicons/react/24/solid"

async function getBook(params: { id: string }) {
    const res = await fetch(`https://cjdunteman.com/api/books/${params.id}`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch book details')
    }

    const book = await res.json()

    return book
}

export default async function BookLayout({ params }) {
    console.log(params)
    const book = await getBook(params);
    console.log(book.rating)
    return (
        <div className="flex max-w-2xl mx-auto flex-col py-8 sm:text-md gap-2">
            <div>            <h1 className="text-bold dark:text-bold pr-4">{book.title}</h1>
                <p className="text-3xl text-darkGray">{book.author}</p></div>
            <div className="flex flex-row">
                <StarIcon className="w-6 h-6 text-gold" />
                <StarIcon className="w-6 h-6 text-gold" />
                <StarIcon className="w-6 h-6 text-gold" />
                <StarIcon className="w-6 h-6 text-gold" />
                <StarIcon className="w-6 h-6 text-gold" />
            </div>
            <div>
                <p><span className="px-2 py-1 rounded-md border border-purple-500">{book.status.toLowerCase()}</span></p>
            </div>
        </div>
    )
}