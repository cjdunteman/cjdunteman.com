'use client'

import useSWR from "swr"
import { Post } from "lib/types"
import fetcher from "lib/fetcher"
import { fetchData } from "next-auth/client/_utils"
import { Comment } from "lib/types"

export default function Comments({post}: { post: Post }) {
    const { data } = useSWR(`/api/comments`, fetcher)
    // if (error) return <div>An error occured.</div>
    // if (!data) return <div>Loading ...</div>

    console.log(data)
    // data.forEach(comment => {
    //     for (let key in comment) {
    //         <li key={comment}>{comment.body}</li>
    //     }
    // })
    // const comments = data.comments
    // console.log(comments[0].body)

    // const commentItems = comments.map((comment) =>
    //     <li key={comment}>{comment.body}</li>
    // )

    return (
        <div>
            {/* <ul>{commentItems}</ul> */}
        </div>
    )
}