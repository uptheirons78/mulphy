import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout";
import defaultImage from "../images/mulphy-default.png";

const Post = ({ data, pageContext }) => {
  const {
    title,
    slug,
    date,
    metadate,
    description,
    thumbnail,
  } = data.markdownRemark.frontmatter;

  const ogImage = thumbnail
    ? `https://mulphy.com${thumbnail.childImageSharp.fluid.src}`
    : `https://mulphy.com${defaultImage}`;

  return (
    <Layout>
      <Helmet>
        <html lang="it" />
        <title>{`Mulphy - ${title}`}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mulphy.com/blog/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <link rel="canonical" href={`https://mulphy.com/blog/${slug}`} />
        {date ? (
          <meta property="article:published_time" content={metadate} />
        ) : null}
      </Helmet>
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
                ← Precedente
              </Link>
            </li>
          )}
          {pageContext.next && (
            <li>
              <Link to={`/blog/${pageContext.next.frontmatter.slug}`}>
                Successivo →
              </Link>
            </li>
          )}
        </ul>
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
        metadate
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
