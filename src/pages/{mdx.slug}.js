// Using Gatsby File System Route API
// https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

export default function PostPage({ data }) {
    const {
        body,
        frontmatter: { title },
    } = data.mdx;
    return (
        <div>
            <h1>{title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
        </div>
    );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`;