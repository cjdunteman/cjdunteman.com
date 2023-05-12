import { NextApiRequest, NextApiResponse } from "next";
import { Book, PrismaClient } from "@prisma/client";
import { quartersInYear } from "date-fns";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  console.log(req.query);

  switch (method) {
    case "GET":
      // Get all book data from db
      try {
        const books = await prisma.book.findMany();
        return res.status(200).json(books);
      } catch (e) {
        return res.status(500).json({ error: 'Error fetching books' });
      }
    case 'POST':
      // Create a book in db
      let status;
      if (req.query.status === 'READ') {
        status = 'READ';
      } else if (req.query.status === 'READING') {
        status = 'READING';
      } else {
        status = 'TO_READ';
      }

      try {
        const book = await prisma.book.create({
          data: {
            title: req.query.title as string,
            author: req.query.author as string,
            mustRead: Boolean(req.query.mustRead),
            status: status,
          },
        });
        console.log(book);
        return res.status(200);
      } catch (e) {
        return res.status(500).json({ error: 'Error creating book' });
      }
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}