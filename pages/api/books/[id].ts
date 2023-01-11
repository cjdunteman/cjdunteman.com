import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { query: id, method } = req;

    switch (method) {
        case 'GET':
            // Get book data from db
            try {
                const book = await prisma.book.findUnique({
                    where: {
                        id: Number(id),
                    }
                })
                return res.status(200).json(book);
            } catch (e) {
                return res.status(500).json({ error: 'Error fetching book' });
            }
        // TODO: PUT - update book data if CJ
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}