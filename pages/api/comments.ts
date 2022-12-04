import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from 'next'

// TODO: add type for response data
// type ResponseData = {
//   message: string
// }

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        //REVIEW -
        // 2 methods to get all the comments for a post, which is better?
        // 
        // 1 - get a post and then get all the comments attached to it
        // 2 - go through all comments and grab those with matching postId
        const comments = await prisma.comment.findMany({
          where: {
            postId: 1
          },
          select: {
            author: true,
            body: true,
            postedAt: true
          },
          orderBy: {
            postedAt: 'desc'
          }
        }
        )
        console.log("COMMENTS:", comments)
        res.status(200).json(
          comments.map((comment) => ({
            author: true,
            body: comment.body,
            postedAt: comment.postedAt,
          }))
          );
          break
        }
        catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error fetching comments' })
        break
      }
    // TODO: case 'PUT'
    // TODO: case 'DELETE'
    default: 
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}