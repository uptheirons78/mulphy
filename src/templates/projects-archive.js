import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

const ProjectsArchive = ({ data, pageContext }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout>
      {projects.map(({ node }) => {
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
      <Pagination
        currentPage={pageContext.currentPage}
        totalCount={data.allMarkdownRemark.totalCount}
        pathPrefix="/projects/"
      />

      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  );
};

export default ProjectsArchive;

export const pageQuery = graphql`
  query Projects($skip: Int! = 0) {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            date
            title
            description
          }
          html
        }
      }
    }
  }
`;
