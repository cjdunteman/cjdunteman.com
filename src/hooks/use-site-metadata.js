import { graphql, useStaticQuery } from "gatsby";

// Get the site metadata on demand
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
    );
    return site.siteMetadata;
};