import "server-only"

import { Suspense } from "react";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { unstable_getServerSession } from "next-auth";
import SignIn from "components/SignIn";
import CommentForm from "components/CommentForm";

import Comments from "../../../components/comments";
import { Mdx } from "components/mdx";

function getPost(params: { slug: string; }) {
  const rawPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  const post: Post = {
    ...rawPost,
    id: rawPost.id,
    title: rawPost.title,
    // body: rawPost.html,
    date: format(parseISO(rawPost.date), "LLLL d, yyyy"),
  };

  return { post }
}

export default async function PostLayout({ params }) {
  const session = unstable_getServerSession
  const { post } = getPost(params)


  // NOTE - temporary workaround for using async/await in jsx
  // https://beta.nextjs.org/docs/data-fetching/fetching
  return (
    <div>
      <article className="prose dark:prose-dark">
        <h1>{post.title}</h1>
        {post.date === post.dateModified ? (
          <time dateTime={post.date} className="text-sm text-darkGray">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        ) : (
          <p className="text-sm text-darkGray">
            Updated{" "}
            <time
              dateTime={post.dateModified}
              className="text-sm text-darkGray"
            >
              {format(parseISO(post.dateModified), "LLLL d, yyyy")}
            </time>
          </p>
        )}
        <Mdx code={post.body.code} />
      </article>
      <br></br>
      <br></br>
      <br></br>
      {!session ? <SignIn /> : <CommentForm post={post}/>
      }
      <br></br>
      {/* <SignIn /> */}
      <Suspense fallback={<p>Loading comments...</p>}>
        {/* @ts-expect-error Server Component */}
        <Comments post={post}/>
      </Suspense>
    </div>
  );
}
