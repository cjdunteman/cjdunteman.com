import { defineDocumentType, makeSource } from "contentlayer/source-files";
import gfm from "remark-gfm";
import slug from "rehype-slug";
import codeTitles from "rehype-code-titles";
import autolinkHeadings from "rehype-autolink-headings";
import prism from "rehype-prism-plus";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "markdown",
      description: "Brief descripiton of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [gfm],
    rehypePlugins: [slug, codeTitles, autolinkHeadings, prism],
  },
});
