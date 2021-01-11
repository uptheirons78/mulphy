import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import {
  SectionName,
  SectionSummary,
  Wrapper,
} from "../styles/StyledPageElements";

const HomePortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              projectImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
              slug
              projectCategory
            }
          }
        }
      }
    }
  `);
  const works = data.projects.edges;
  return (
    <StyledPortfolioSection>
      <Wrapper>
        <SectionName>Portfolio</SectionName>
        <SectionSummary>I nostri lavori recenti</SectionSummary>
        <div className="grid">
          {works.map(work => (
            <article key={work.node.id}>
              <div className="img-container">
                <Img
                  fluid={
                    work.node.frontmatter.projectImage.childImageSharp.fluid
                  }
                  alt={work.node.frontmatter.title}
                />
                <div className="text-content">
                  <Link to={`/projects/${work.node.frontmatter.slug}`}>
                    <h3>{work.node.frontmatter.title}</h3>
                  </Link>
                  <p>
                    {work.node.frontmatter.projectCategory.map((c, i) => (
                      <span key={c}>{c} </span>
                    ))}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="link-container">
          <Link className="section-link" to="/projects">
            Altri progetti →
          </Link>
        </div>
      </Wrapper>
    </StyledPortfolioSection>
  );
};

export default HomePortfolioSection;

const StyledPortfolioSection = styled.section`
  padding-top: var(--sp-6);
  padding-bottom: var(--sp-6);
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--sp-2);

    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 465px) {
      grid-template-columns: repeat(1, 1fr);
    }

    article {
      grid-column: span 1;

      .img-container {
        position: relative;

        @media screen and (max-width: 465px) {
          max-width: 280px;
          width: 100%;
          margin: 0 auto;
        }

        .text-content {
          position: absolute;
          bottom: 5px;
          left: 5px;
          padding: var(--sp-2) var(--sp-4);
          background-color: rgba(255, 255, 255, 0.8);

          a {
            color: currentColor;
          }

          h3 {
            font-size: 1rem;
            color: var(--clr-primary);
          }

          p {
            font-size: 0.8rem;
            color: var(--clr-gray-600);

            span:not(:last-child):after {
              content: " - ";
              color: var(--clr-gray-600);
            }
          }
        }
      }
    }
  }

  .link-container {
    width: 100%;
    display: flex;
    justify-content: center;

    .section-link {
      display: inline-block;
      color: var(--clr-primary);
      border: 1px solid var(--clr-primary);
      padding: 0.3rem 0.6rem;
      margin: 2rem auto;
      transition: all 450ms ease-in-out;

      &:hover {
        letter-spacing: 1px;
      }
    }
  }
`;
