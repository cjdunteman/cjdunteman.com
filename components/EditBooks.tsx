'use client'

async function createBook(event) {
    const title = event.target.title.value
    const author = event.target.author.value
    const mustread = event.target.mustread.value
    const status = event.target.status.value
    const res = await fetch('https://www.cjdunteman.com/api/books?' + new URLSearchParams({
      title: title,
      author: author,
      mustread: mustread,
      status: status
    }), {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      cache: "no-store",
    })

    if (res.ok) {
        // Activate closest `error.js` Error boundary
        console.log("Book created")
    }


  }
  
  export default function EditBooks() {
    return (
      <form onSubmit={createBook}>
        <input
          name="title"
          id="title"
          type="text"
          minLength={1}
          maxLength={100}
          className="pl-4 mb-2 py-4 w-full bg-purple-100 dark:bg-purple-900 border border-solid rounded-md border-purple-900 focus:outline-none"
        />
        <input
          name="author"
          id="author"
          type="text"
          minLength={1}
          maxLength={100}
          className="pl-4 mb-2 py-4 w-full bg-purple-100 dark:bg-purple-900 border border-solid rounded-md border-purple-900 focus:outline-none"
        />
        <input
          name="mustread"
          id="mustread"
          type="radio"
          value="true"
          />
          <label htmlFor="mustread">Yes</label>
        <input
          name="mustread"
          id="mustread"
          type="radio"
          value="false"
          />
        <label htmlFor="mustread">No</label>
        <input
            name="status"
            id="status"
            type="radio"
            value="READ"
            />
        <label htmlFor="status">Read</label>
        <input
            name="status"
            id="status"
            type="radio"
            value="READING"
            />
        <label htmlFor="status">Reading</label>
        <input
            name="status"
            id="status"
            type="radio"
            value="TO_READ"
        />
        <label htmlFor="status">To Read</label>
        <button type="submit" className="pl-4">Submit</button>
        </form>
    )
  }