import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

function PostCard(post) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link
          href={post.url}
          className="text-2xl text-blue hover:text-lightBlue"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="text-sm text-darkGray">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div>{post.description.raw}</div>
    </div>
  );
}

export default function BlogPage() {
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    return (
      <div>
        <h1 className="text-lg text-bold dark:text-bold dark:text-lg">
          Writing
        </h1>
        <hr className="text-lightGray dark:text-darkGray"></hr>
        {posts?.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
  );
}