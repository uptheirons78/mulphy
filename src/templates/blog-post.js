import React from "react";
import { graphql } from "gatsby";

const Post = ({ data, pageContext }) => {
  const { title } = data.markdownRemark.frontmatter;

  return (
    <>
      <h3>{title}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </>
  );
};

export default Post;

// Gatsby Query
export const pageQuery = graphql`
  query PostsBySlug($slug: String!) {
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
