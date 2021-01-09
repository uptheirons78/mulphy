import React from "react";
import { graphql } from "gatsby";
import AccordionSection from "../components/AccordionSection";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "../components/HomeSectionTwo";
import Layout from "../components/Layout";
import { PageMetaTags } from "../components/MetaTags";

const IndexPage = ({ data }) => {
  const faq = data.allMarkdownRemark.edges[0].node.frontmatter.faq;
  return (
    <Layout>
      <PageMetaTags title="Home" />
      <HomeSectionOne />
      <HomeSectionTwo />
      <AccordionSection faq={faq} />
    </Layout>
  );
};

export default IndexPage;

// Gatsby Query
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "homepage" } } }
    ) {
      edges {
        node {
          frontmatter {
            faq {
              answer
              faqId
              question
            }
          }
        }
      }
    }
  }
`;
