import { Suspense } from "react";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import SignIn from '../../components/SignIn'
import Comments from "../../components/comments";
import { unstable_getServerSession } from "next-auth";

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

  const MDXContent = useMDXComponent(post.body.code);

  return { post, MDXContent }
}

export default function PostLayout({ params }) {
  const { post, MDXContent } = getPost(params)
  // const MDXContent = useMDXComponent(post.body.code);

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
        <MDXContent />
      </article>
      <br></br>
      <br></br>
      <br></br>
      {/* <SignIn /> */}
      <form>
        <input 
          aria-label="Leave a comment" 
          placeholder="Leave a comment..."
          className="pl-4 mb-2 py-4 w-full bg-purple-100 dark:bg-purple-900 border border-solid rounded-md border-purple-900 focus:outline-none" 
        />
        <button className="pl-4">Submit</button>
      </form>
      <br></br>
      <Suspense fallback={<p>Loading comments...</p>}>
        {/* @ts-expect-error Server Component */}
        <Comments post={post}/>
      </Suspense>
    </div>
  );
}
