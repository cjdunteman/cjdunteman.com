import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-2xl hover:underline decoration-green-light">
            {post.title}
          </a>
        </Link>
      </h2>
      <time dateTime={post.date} className="text-sm text-darkGray">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div>{post.description.raw}</div>
    </div>
  );
}

export default function Blog({ posts }) {
  return (
    <div className="mx-auto max-w-xl py-16">
      <Head>
        <title>CJ's Writing</title>
      </Head>

      <p>Writing</p>
      <hr className="text-lightGray dark:text-darkGray"></hr>
      <br></br>
      <br></br>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}