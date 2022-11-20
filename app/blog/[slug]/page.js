import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

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
    <article className="mx-auto pb-16 prose dark:prose-dark">
      <div className="mb-6">
        <br></br>
        <h1 className="mb-1 text-4xl font-bold">{post.title}</h1>
        {post.date === post.dateModified ? (
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        ) : (
          <p className="text-sm text-slate-600">
            Updated{" "}
            <time
              dateTime={post.dateModified}
              className="text-sm text-slate-600"
            >
              {format(parseISO(post.dateModified), "LLLL d, yyyy")}
            </time>
          </p>
        )}
      </div>
      <div
        className="cl-post-body"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
