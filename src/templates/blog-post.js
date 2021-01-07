import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/Layout";

const Post = ({ data, pageContext }) => {
  const {
    title,
    date,
    description,
    thumbnail,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <MarkdownContent>
        <h1 className="post-title">{title}</h1>
        <p className="post-date">{date}</p>
        <p className="post-description">{description}</p>
        {thumbnail && (
          <div className="post-thumbnail">
            <Img alt={title} fluid={thumbnail.childImageSharp.fluid} />
          </div>
        )}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <ul className="post-links">
          {pageContext.previous && (
            <li>
              <Link to={`/blog/${pageContext.previous.frontmatter.slug}`}>
                ← {pageContext.previous.frontmatter.slug}
              </Link>
            </li>
          )}
          {pageContext.next && (
            <li>
              <Link to={`/blog/${pageContext.next.frontmatter.slug}`}>
                {pageContext.next.frontmatter.slug} →
              </Link>
            </li>
          )}
        </ul>

        <pre>{JSON.stringify(data, null, 2)}</pre>
        <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      </MarkdownContent>
    </Layout>
  );
};

export default Post;

const MarkdownContent = styled.article`
  max-width: var(--container-width);
  margin: 0 auto;
  padding-left: var(--sp-4);
  padding-right: var(--sp-4);

  .post-title {
    margin-top: var(--sp-8);
    color: var(--clr-gray-900);
    font-size: 2.2rem;
    line-height: 1.3;
    text-transform: uppercase;
    max-width: 900px;
    width: 100%;
  }
  .post-date {
    color: var(--clr-gray-700);
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .post-description {
    color: var(--clr-gray-800);
    margin: var(--sp-8) auto;
    max-width: 700px;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 200;
  }

  .post-thumbnail {
    max-width: 800px;
    margin: 0 auto;
  }

  .post-content {
    max-width: 800px;
    margin: var(--sp-8) auto;
    padding: 0 var(--sp-4);

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
      .gatsby-resp-image-wrapper {
        margin-top: var(--sp-3) !important;
        margin-bottom: var(--sp-3) !important;
      }
    }
  }
  .post-links {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: var(--sp-8) auto;
    padding: 0 var(--sp-4);

    a {
      color: var(--clr-primary);
      transition: all 350ms;
      font-size: 1.2rem;

      &:hover {
        letter-spacing: 1px;
      }
    }
  }
`;

// Gatsby Query
export const pageQuery = graphql`
  query PostsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        date(formatString: "DD MMMM YYYY", locale: "it")
        thumbnail {
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
