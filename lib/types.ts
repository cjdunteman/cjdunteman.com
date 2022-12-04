export type Post = {
    body: any
    dateModified: string
    date: string
    title: string
  }

export type Comment = {
  id: number
  body: string
  postedAt: string
  authorId: number
  postId: number
}