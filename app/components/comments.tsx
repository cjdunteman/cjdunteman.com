"use client"

import prisma from "../../lib/prisma"

export default async function Comments() {
    const data = await prisma.comment.findMany();
    const comment = data[0].body;

    // const createComment = async (event) => {
    //     event.preventDefault()

    //     const newComment = await prisma.Comment.create({
    //         data: {
    //             body: event.target.first.value, 
    //         }
    //     })
    // }

    return (
        <div>
            {/* <form>
                <label>Leave a comment</label>
                <input type="text" id="comment" name="comment"></input>
                <button type="submit">Submit</button>
            </form> */}
            <p>{comment}</p>
        </div>
    )
}