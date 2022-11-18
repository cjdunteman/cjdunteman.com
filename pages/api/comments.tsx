import prisma from "lib/prisma";

export default async function handle(req, res) {
    const comments = await prisma.comment.findMany();
    res.json(comments);   
}