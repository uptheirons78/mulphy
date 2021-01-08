import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { ProjectMetaTags } from "../components/MetaTags";
import SocialShare from "../components/SocialShare";

const Project = ({ data, pageContext }) => {
  const {
    title,
    subTitle,
    slug,
    projectUrl,
    projectClient,
    projectDate,
    projectCategory,
    projectThumbnail,
  } = data.markdownRemark.frontmatter;
  const { baseUrl } = data.site.siteMetadata;

  return (
    <Layout>
      <ProjectMetaTags project={data} />
      <ProjectContent>
        <div className="title-section">
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
          <a
            className="project-button"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita il sito →
          </a>
        </div>
        {projectThumbnail && (
          <div className="project-thumbnail">
            <Img alt={title} fluid={projectThumbnail.childImageSharp.fluid} />
          </div>
        )}
        <div className="project-data">
          <h5>
            <span>Cliente: </span>
            {projectClient}
          </h5>
          <h5>
            <span>Data: </span>
            {projectDate}
          </h5>
          <h5>
            <span>Categorie: </span>
            {projectCategory.join(", ")}
          </h5>
        </div>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <div className="social-container">
          <SocialShare
            socialConfig={{
              config: {
                url: `${baseUrl}/projects/${slug}`,
              },
            }}
          />
        </div>
        <ul className="project-links">
          {pageContext.previous && (
            <li>
              <Link to={`/projects/${pageContext.previous.frontmatter.slug}`}>
                ← Precedente
              </Link>
            </li>
          )}
          {pageContext.next && (
            <li>
              <Link to={`/projects/${pageContext.next.frontmatter.slug}`}>
                Successivo →
              </Link>
            </li>
          )}
        </ul>
      </ProjectContent>
    </Layout>
  );
};

export default Project;

const ProjectContent = styled.article`
  max-width: var(--container-width);
  margin: 0 auto;
  padding-left: var(--sp-4);
  padding-right: var(--sp-4);

  .title-section {
    padding: var(--sp-6);
    @media screen and (max-width: 901px) {
      padding-left: 0;
      padding-right: 0;
    }

    h1 {
      color: var(--clr-primary);
      font-size: 1rem;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: var(--sp-2);
    }
    h3 {
      max-width: 480px;
      width: 100%;
      font-size: 2.6rem;
    }
    a {
      display: inline-block;
      margin-top: var(--sp-6);
      color: var(--clr-primary);
      padding: 0.3rem 0.6rem;
      border: 1px solid var(--clr-primary);
      transition: all 450ms ease-in-out;

      &:hover {
        color: var(--clr-secondary);
        border: 1px solid var(--clr-secondary);
        letter-spacing: 1px;
      }
    }
  }

  .project-thumbnail {
    max-width: 800px;
    margin: 0 auto;
  }

  .project-data {
    max-width: 800px;
    margin: var(--sp-8) auto;
    padding: 0 var(--sp-4);

    @media screen and (max-width: 550px) {
      padding: 0;
    }

    h5 {
      padding-top: var(--sp-1);
      padding-bottom: var(--sp-1);
      font-size: 1rem;
      color: var(--clr-gray-600);
      font-weight: 400;
      span {
        color: var(--clr-primary);
      }
    }
  }

  .project-content {
    max-width: 800px;
    margin: var(--sp-8) auto;
    padding: 0 var(--sp-4);

    @media screen and (max-width: 550px) {
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--clr-primary);
      margin-top: var(--sp-6);
      margin-bottom: var(--sp-2);
    }

    a,
    strong,
    em {
      color: var(--clr-primary);
      transition: all 350ms;
    }

    a:hover {
      color: var(--clr-secondary);
      font-weight: bold;
    }

    p {
      @media screen and (max-width: 550px) {
        font-size: 1.1rem;
      }
      .gatsby-resp-image-wrapper {
        margin-top: var(--sp-3) !important;
        margin-bottom: var(--sp-3) !important;
      }
    }
  }
  .project-links {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: var(--sp-8) auto;
    padding: 0 var(--sp-4);

    a {
      color: var(--clr-primary);
      transition: all 350ms;
      font-size: 1rem;

      &:hover {
        letter-spacing: 1px;
      }
    }
  }

  .social-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--sp-4);
    @media screen and (max-width: 550px) {
      padding: 0;
    }
  }
`;

// Gatsby Query
export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
    site {
      siteMetadata {
        baseUrl
        twitterAccount
        siteTitle
        siteDescription
        siteAuthor
      }
    }
    defaultImage: file(relativePath: { eq: "mulphy-default.png" }) {
      publicURL
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subTitle
        date
        description
        slug
        projectUrl
        projectClient
        projectDate
        projectCategory
        projectThumbnail {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
