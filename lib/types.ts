export type User = {
  id: number,
}

export type Post = {
    id: any
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

export type UserPosts = User & { posts: Post[]}