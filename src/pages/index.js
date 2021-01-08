import React from "react";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "../components/HomeSectionTwo";
import Layout from "../components/Layout";
import { PageMetaTags } from "../components/MetaTags";

const IndexPage = () => (
  <Layout>
    <PageMetaTags title="Home" />
    <HomeSectionOne />
    <HomeSectionTwo />
  </Layout>
);

export default IndexPage;
