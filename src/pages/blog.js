import React from 'react';
import { graphql } from 'gatsby';
import * as styles from '../components/blog.module.css'

export default function Blog({ data }) {
    return (
        <>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
                <div key={id}>
                    <h2><a className={styles.title} href={`/${slug}`}>{frontmatter.title}</a></h2>
                    <h3 className={styles.date}>{frontmatter.date}</h3>
                    <p>{excerpt}</p>
                    <p><a className={styles.read} href={`/${slug}`}>Read more</a></p>
                </div>
            ))}
        </>
    )
}

export const query = graphql`
            query SITE_POSTS_QUERY {
                allMdx(sort: {fields: [frontmatter___date], order: DESC }) {
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