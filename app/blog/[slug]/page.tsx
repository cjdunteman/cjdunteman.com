import type { Metadata } from 'next';
import { Suspense } from "react";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getServerSession } from "next-auth";
import { Mdx } from "components/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    date: date,
    description: description,
    // image,
    slug,
  } = post;

  return {
    title,
    description,
  };
}

export default async function PostLayout({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound();
  }


  // NOTE - temporary workaround for using async/await in jsx
  // https://beta.nextjs.org/docs/data-fetching/fetching
  return (
    <div>
      <article className="prose dark:prose-dark">
        <h1>{post.title}</h1>
        {post.date === post.dateModified ? (
          <time dateTime={post.date} className="text-sm text-black dark:text-white">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        ) : (
          <p className="text-sm text-black dark:text-white">
            Updated{" "}
            <time
              dateTime={post.dateModified}
              className="text-sm text-black dark:text-white"
            >
              {format(parseISO(post.dateModified), "LLLL d, yyyy")}
            </time>
          </p>
        )}
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
