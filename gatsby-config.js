/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = {
  title: `CJ Dunteman`,
  description: `Website for CJ Dunteman.`,
};

module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: "http://localhost:1337",
    //     collectionTypes: [
    //       "restaurant",
    //       "category",
    //     ],
    //     queryLimit: 1000,
    //   },
    // }
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts",
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
  ]
}
