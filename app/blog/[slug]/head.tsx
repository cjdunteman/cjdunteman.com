import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";


function getPost(slug) {
    const rawPost = allPosts.find(
        (post) => post._raw.flattenedPath === slug
      );

      const post = {
        // ...rawPost,
        date: format(parseISO(rawPost.date), "LLLL d, yyyy"),
        title: rawPost.title
      };
    return post
}
export default function Head({ params }: { params: { slug: string } }) {
    const post = getPost(params.slug);
    
    return (
        <>
        <title>{post.title}</title>
        <meta
            property="og:image"
            content={`https://cjdunteman.com/api/og?title=${post.title}`}
        />
        </>
    )
}
