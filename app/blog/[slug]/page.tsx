import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
// import { Share1Icon } from "@radix-ui/react-icons";

import Comments from "../../components/comments";

import { Post } from "lib/types";

export default function PostLayout({ params }) {
  const rawPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  const post: Post = {
    ...rawPost,
    title: rawPost.title,
    // body: rawPost.html,
    date: format(parseISO(rawPost.date), "LLLL d, yyyy"),
  };

  // console.log(post.title)
  const MDXContent = useMDXComponent(post.body.code);

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

      {/* @ts-expect-error Server Component */}
      <Comments post={post}/>
    </div>
  );
}