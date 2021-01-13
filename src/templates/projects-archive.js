import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import {
  ArchivePagination,
  PageTitleSection,
  Wrapper,
  Card,
} from "../styles/StyledPageElements";
import { PageMetaTags } from "../components/MetaTags";

const ProjectsArchive = ({ data, pageContext }) => {
  const projects = data.allMarkdownRemark.edges;
  const { currentPage, pages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pages;
  const prevPage =
    currentPage - 1 === 1 ? "/projects/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const { baseUrl } = data.site.siteMetadata;

  return (
    <Layout>
      <PageMetaTags
        title="Portfolio"
        description="Collezione di lavori recenti progettati, disegnati e sviluppati da Mulphy. Agenzia digitale e creativa"
        canonical={`${baseUrl}/projects`}
      />
      <Wrapper>
        <PageTitleSection>
          <h1>Portfolio</h1>
          <h3>Alcuni dei nostri lavori recenti</h3>
        </PageTitleSection>
      </Wrapper>
      {projects.map(({ node }) => {
        const {
          title,
          description,
          slug,
          projectDate,
          projectCategory,
          projectThumbnail,
        } = node.frontmatter;
        return (
          <Card key={node.id}>
            <header>
              {projectThumbnail && (
                <div className="post-thumbnail">
                  <Img
                    alt={title}
                    fluid={projectThumbnail.childImageSharp.fluid}
                  />
                </div>
              )}
              <small>{projectDate}</small>
              <p>
                {projectCategory.map((item, i) => (
                  <span key={`${item}__${i}`}>{item}</span>
                ))}
              </p>
            </header>
            <section>
              <Link to={`/projects/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>
                {`${description.slice(0, 220)} ...`}
                {` `}
                <span>
                  <Link className="readmore" to={`/projects/${slug}`}>
                    leggi tutto
                  </Link>
                </span>
              </p>
            </section>
          </Card>
        );
      })}
      <ArchivePagination>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </ArchivePagination>
    </Layout>
  );
};

export default ProjectsArchive;

export const pageQuery = graphql`
  query Projects($skip: Int! = 0, $limit: Int!) {
    site {
      siteMetadata {
        baseUrl
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subTitle
            date
            description
            slug
            projectDate
            projectCategory
            projectThumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
