import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Comments from "../../components/Comments.js";

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
          <div className="mb-6 text-center">
            <br></br>
            <h1 className="mb-1 text-4xl font-bold">{post.title}</h1>
            <time dateTime={post.date} className="text-sm text-slate-600">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
          <div
            className="cl-post-body"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </article>
        <Comments />
      </div>
    </>
  );
};

export default PostLayout;
