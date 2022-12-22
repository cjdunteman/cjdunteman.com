'use client'

// import { Post } from "lib/types"

async function createComment(event) {

    const postId: number = event.target.postId.value
    const body = event.target.comment.value
    const JSONdata = JSON.stringify(body)
    const res = await fetch(`https://cjdunteman.com/api/comments?postid=${postId}`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      // cache: "no-store",
      body: JSONdata,
    })
    if (!res.ok) {
      // Activate closest `error.js` Error boundary
      throw new Error('Failed to fetch comments')
  }
  }

export default function CommentForm({post}) {
    return (
        <form onSubmit={createComment}>
        <input type="hidden" name="postId" value={post.id}/>
        <input 
        name="comment"
        id="comment"
        aria-label="Leave a comment" 
        placeholder="Leave a comment..."
        required
        type="text"
        minLength={1}
        maxLength={200}
        className="pl-4 mb-2 py-4 w-full bg-purple-100 dark:bg-purple-900 border border-solid rounded-md border-purple-900 focus:outline-none"
        />
        <button type="submit" className="pl-4">Submit</button>
        </form>
    )
}