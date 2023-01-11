import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const posts = await prisma.post.findMany();
                return res.status(200).json(posts);
            }
            catch (e) {
                return res.status(500).json({ error: 'Error fetching posts' })
            }
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}