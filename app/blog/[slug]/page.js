import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function PostLayout({ params }) {
  const rawPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  const post = {
    ...rawPost,
    date: format(parseISO(rawPost.date), "LLLL d, yyyy"),
  };

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose dark:prose-dark">
      <h1>{post.title}</h1>
      {post.date === post.dateModified ? (
        <time dateTime={post.date} className="text-sm text-darkGray">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      ) : (
        <p className="text-sm text-darkGray">
          Updated{" "}
          <time dateTime={post.dateModified} className="text-sm text-darkGray">
            {format(parseISO(post.dateModified), "LLLL d, yyyy")}
          </time>
        </p>
      )}
      <MDXContent />
    </article>
  );
}
