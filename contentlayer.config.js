import { defineDocumentType, makeSource } from "contentlayer/source-files";
import gfm from "remark-gfm";
import slug from "rehype-slug";
import codeTitles from "rehype-code-titles";
import autolinkHeadings from "rehype-autolink-headings";
import prism from "rehype-prism-plus";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  bodyType: "mdx",
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
    dateModified: {
      type: "date",
      description: "The date the post was last updated",
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
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [gfm],
    rehypePlugins: [slug, codeTitles, autolinkHeadings, prism],
  },
});

export default contentLayerConfig;
