import { NextApiRequest, NextApiResponse } from "next";


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method
    switch (method) {
        case 'GET':
            try {
                const users = await prisma.user.findMany()
                return res.status(200).json(users)
            } 
            catch (e) {
                console.error('Request error', e)
                return res.status(500).json({ error: 'Error fetching users' });
            }
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}