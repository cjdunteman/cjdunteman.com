import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    console.log(searchParams)
    const { postId } = searchParams

    const comments = await prisma.comment.findMany({
        where: { postId: Number(postid) },
        include: {
            author: true
        }
    })

    return NextResponse.json(comments, {
        status: 200,
    });
}

export async function POST() {
    console.log('POST REQUEST')
}