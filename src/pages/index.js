import React from "react";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "../components/HomeSectionTwo";
import Layout from "../components/Layout";

/** Components */
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeSectionOne />
    <HomeSectionTwo />
  </Layout>
);

export default IndexPage;
