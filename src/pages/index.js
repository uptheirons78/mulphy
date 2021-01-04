import React from "react";
import HomeSectionOne from "../components/HomeSectionOne";
import Layout from "../components/Layout";

/** Components */
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeSectionOne />
  </Layout>
);

export default IndexPage;
