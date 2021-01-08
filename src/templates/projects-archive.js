import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const ProjectsArchive = ({ data, pageContext }) => {
  const projects = data.allMarkdownRemark.edges;
  const { currentPage, pages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pages;
  const prevPage =
    currentPage - 1 === 1 ? "/projects/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

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
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: pages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/projects/${i === 0 ? "" : i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </Layout>
  );
};

export default ProjectsArchive;

export const pageQuery = graphql`
  query Projects($skip: Int! = 0, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
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
