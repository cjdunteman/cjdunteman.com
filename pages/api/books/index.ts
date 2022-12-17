import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
          const books = await prisma.book.findMany();
          return res.status(200).json(books);
      } catch (e) {
        return res.status(500).json({ error: 'Error fetching books' });
      }
    case 'POST':
      try {
        const book = await prisma.book.create({
          data: {
            title: req.body.title,
            author: req.body.author,
            mustRead: req.body.mustRead,
            status: req.body.status,
          },
        });
        console.log(book);
        return res.status(200);
      } catch (e) {
        return res.status(500).json({ error: 'Error creating book' });
      }
  }
    
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}