import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req
    const id = req.query.id;

    switch (method) {
        case 'GET':
            // Get post data from db
            try {
                const post = await prisma.post.findUnique({
                    where: {
                        id: Number(id),
                    }
                })
                return res.status(200).json(post)
            } catch (e) {
                return res.status(500).json({ error: 'Error fetching post' });
            }
        // TODO: PUT - update post data if CJ or author
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}