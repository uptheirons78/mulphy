import React from "react";
import { graphql, Link } from "gatsby";
import Pager from "../components/pager";

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            description
            date(formatString: "DD MMM YYYY", locale: "it")
          }
        }
      }
    }
  }
`;

const BlogArchive = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title;
        return (
          <article key={node.frontmatter.slug}>
            <header>
              <h3>
                <Link to={node.frontmatter.slug}> {title} </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}

      <Pager pageContext={pageContext} />
    </>
  );
};

export default BlogArchive;
