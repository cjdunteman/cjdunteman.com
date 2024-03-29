import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My ramblings about tech and stuff.'
}

function PostCard(post) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link
          href={post.url}
          className="text-2xl font-bold text-purple-500 dark:text-purple-500 hover:text-black dark:hover:text-white"
        >
          {post.title}
        </Link>
      </h2>
      {post.date === post.dateModified
        ? <time dateTime={post.date} className="text-sm text-black dark:text-white">
          {format(parseISO(post.date), "LLLL d, yyyy")}</time>
        : <p className="text-sm text-black dark:text-white">Updated <time dateTime={post.dateModified} className="text-sm text-black dark:text-white">{format(parseISO(post.dateModified), "LLLL d, yyyy")}</time></p>
      }
      <div>{post.description.raw}</div>
    </div>
  );
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div>
      <h1>Blog</h1>
      <div className="mt-6">
        {posts?.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}