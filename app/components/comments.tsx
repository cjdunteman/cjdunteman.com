import { Post } from "lib/types"
// import { use } from "react"
// import { useState } from "react";

async function getComments() {
    // const [APIResponse, setAPIResponse] = useState(null);

    const res = await fetch('https://www.cjdunteman.com/api/comments', {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        cache: "no-store"
    })

    if (!res.ok) {
        // Activate closest `error.js` Error boundary
        throw new Error('Failed to fetch comments')
    }

    // setAPIResponse(await res.json())

    const comments = await res.json()

    // console.log(res)
    return comments 
}

export default async function Comments({post}: { post: Post }) { 
    const comments = await getComments();
    console.log("COMMENTS: ", comments)

    const commentItems = comments.map(comment => (
            // <li key={comment.id}>{comment.body} - {comment.author}</li>
            <div key={comment.id} className="border border-solid rounded-md border-purple-200 dark:border-purple-800 mb-4 p-4">
                <p className="text-md">{comment.body}</p>
                <br></br>
                <p className="text-darkGray dark:text-gray text-sm">{comment.postedAt}</p>
            </div>
        ))

    return (
        <>
        <div>
            <p>Comments</p>
            <ul>{commentItems}</ul>
        </div>
        </>
    )
}