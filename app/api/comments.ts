import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"


const prisma = new PrismaClient()

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  const postid = req.query.postid
  const session = await getServerSession(req, res, authOptions)

  switch (method) {
    case 'GET':
      try {
        // REVIEW -
        // 2 methods to get all the comments for a post, which is better?
        // 
        // 1 - get a post and then get all the comments attached to it
        // 2 - go through all comments and grab those with matching postId
        const comments = await prisma.comment.findMany({
          where: { postId: Number(postid) },
          include: {
            author: true
          }
        })
        return res.status(200).json(comments)
      }
      catch (e) {
        console.error('Request error', e)
        return res.status(500).json({ error: 'Error fetching comments' })
      }
    case 'POST':
      if (!session) {
        return res.status(401).json({ error: 'Not authenticated' })
      }
      try {
        const user = await prisma.user.findUnique({
          where: { email: session.user.email }
        })
        const comment = await prisma.comment.create({
          data: {
            body: req.body.body,
            authorId: user.id,
            postId: Number(postid),
          },
        });
        console.log(comment);
        return res.status(200).json({ message: 'Comment posted' })
      }
      catch (e) {
        console.error('Request error', e)
        return res.status(500).json({ error: 'Error posting comment' })
      }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}