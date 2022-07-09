// Make changes here to change wrapPageElement
import React from "react";
import Layout from "./src/components/Layout";

// wrapPageElement
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
export const rootWrapper = ({ element }) => {
    return <Layout>{element}</Layout>;
};