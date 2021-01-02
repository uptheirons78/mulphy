import React from "react";
import { graphql } from "gatsby";

const Project = ({ data, pageContext }) => {
  const { title } = data.markdownRemark.frontmatter;

  return (
    <>
      <h3>{title}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </>
  );
};

export default Project;

// Gatsby Query
export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        date(formatString: "DD MMM YYYY", locale: "it")
      }
      html
    }
  }
`;
