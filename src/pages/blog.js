import React from 'react';
import { graphql } from 'gatsby';

export default function Blog({ data }) {
    return (
        <>
            <div className="flex justify-center">
                {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
                    <div key={id} className="">
                        <h2><a href={`/${slug}`}>{frontmatter.title}</a></h2>
                        <h3>{frontmatter.date}</h3>
                        <p>{excerpt}</p>
                        <p><a href={`/${slug}`}>Read more</a></p>
                    </div>
                ))}
            </div>
        </>
    )
}

export const query = graphql`
    query SITE_POSTS_QUERY {
        allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
            nodes {
            id
            slug
            excerpt(pruneLength: 250)
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
            }
        }
    }
`;