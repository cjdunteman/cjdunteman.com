import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container mx-auto max-w-3xl">
        <article className="mx-auto max-w-2xl pb-16 prose dark:prose-dark">
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
      </div>
    </>
  );
};

export default PostLayout;
