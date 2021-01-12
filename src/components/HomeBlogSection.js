import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import {
  SectionName,
  SectionSummary,
  Wrapper,
} from "../styles/StyledPageElements";

const HomeBlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "blog-section-bg.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              slug
              category
              date(formatString: "DD MMMM YYYY", locale: "it")
              thumbnail {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = data.posts.edges;
  return (
    <StyledBlogSection
      style={{
        backgroundImage: `url(${data.background.childImageSharp.original.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Wrapper>
        <SectionName>Blog</SectionName>
        <SectionSummary style={{ color: "#fff" }}>
          Pensieri sparsi dal mondo del web
        </SectionSummary>
        <div className="cards">
          {posts.map(post => {
            const { title, thumbnail, slug, category } = post.node.frontmatter;
            return (
              <article className="card content" key={post.node.id}>
                <div className="card-content">
                  <div className="card-img">
                    <Link to={`/blog/${slug}`}>
                      <img
                        src={thumbnail.childImageSharp.original.src}
                        alt={title}
                      />
                    </Link>
                  </div>
                  <div className="card-label">{category[0]}</div>
                  <div className="card-title">{title}</div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="link-container">
          <Link className="section-link" to="/blog">
            Altri articoli →
          </Link>
        </div>
      </Wrapper>
    </StyledBlogSection>
  );
};

export default HomeBlogSection;

const StyledBlogSection = styled.section`
  background: #252833;
  padding-top: var(--sp-8);
  padding-bottom: var(--sp-8);

  /* Post Card Styles */
  .cards {
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    grid-template-areas:
      "a a b c"
      "a a d d";
    width: 80%;

    @media screen and (max-width: 900px) {
      width: 90%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      grid-template-rows: 100px 100px 100px 100px;
      grid-template-areas:
        "a a b b"
        "a a b b"
        "c c d d"
        "c c d d";
    }
    @media screen and (max-width: 420px) {
      width: 100%;
      grid-template-rows: 180px 180px 180px 180px;
      grid-template-areas:
        "a a a a"
        "b b b b"
        "c c c c"
        "d d d d";
    }
  }
  .card {
    width: 100%;
    position: relative;
    transition: all 0.25s ease;
    cursor: pointer;
    font-weight: 400;
    &:last-child {
      margin-bottom: 0;
    }
    &:before {
      height: 0;
      content: "";
      display: block;
      padding-bottom: 47.36%;
    }
    &.content {
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        content: "";
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
      }
    }
    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    .card-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .card-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .card-label {
      position: absolute;
      top: 0.45rem;
      left: 0.45rem;
      background: #089f8a;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 0.7em;
      color: white;
      padding: 0.5em;
    }
    .card-title {
      position: absolute;
      left: 1em;
      bottom: 1em;
      color: #d6dbeb;
      z-index: 5;
      font-size: 0.9em;
    }
    &:nth-child(2) {
      .card-label {
        background: #ef4e7b;
      }
    }
    &:nth-child(3) {
      .card-label {
        background: #1098ad;
      }
    }
    &:nth-child(4) {
      .card-label {
        background: var(--clr-purple-800);
      }
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
      .form-title {
        &:before {
          filter: blur(3px);
          opacity: 0.7;
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
      color: var(--clr-gray-50);
      background-color: var(--clr-primary);
      padding: 0.3rem 0.6rem;
      margin: 2rem auto 0 auto;
      transition: all 450ms ease-in-out;

      &:hover {
        letter-spacing: 1px;
      }
    }
  }
`;
