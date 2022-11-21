import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export const dynamicParams = false;

export async function getStaticParams() {
  return allPosts.map((post) => post.url);
}

function fetchPost(params) {
  const rawPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  const post = {
    ...rawPost,
    date: format(parseISO(rawPost.date), "LLLL d, yyyy"),
  };

  return post;
}

export default function PostLayout({ params }) {
  const post = fetchPost(params);

  return (
    <article className="prose dark:prose-dark">
      <h1>{post.title}</h1>
      {post.date === post.dateModified ? (
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      ) : (
        <p className="text-sm text-slate-600">
          Updated{" "}
          <time dateTime={post.dateModified} className="text-sm text-slate-600">
            {format(parseISO(post.dateModified), "LLLL d, yyyy")}
          </time>
        </p>
      )}
      <div
        className="cl-post-body"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
