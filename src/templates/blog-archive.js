import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import {
  ArchivePagination,
  Card,
  PageTitleSection,
  Wrapper,
} from "../styles/StyledPageElements";
import Img from "gatsby-image";
import { PageMetaTags } from "../components/MetaTags";

const BlogArchive = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, pages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const { baseUrl } = data.site.siteMetadata;

  return (
    <Layout>
      <PageMetaTags
        title="Blog"
        description="Collezione di articoli e pensieri legati al mondo del web redatta dalla Mulphy agenzia digitale ed innovativa"
        canonical={`${baseUrl}/blog`}
      />
      <Wrapper>
        <PageTitleSection>
          <h1>Blog</h1>
          <h3>Pensieri sparsi sul mondo del web</h3>
        </PageTitleSection>
        {posts.map(({ node }) => {
          const {
            title,
            description,
            date,
            thumbnail,
            category,
            slug,
          } = node.frontmatter;
          return (
            <Card key={node.id}>
              <header>
                {thumbnail && (
                  <div className="post-thumbnail">
                    <Img alt={title} fluid={thumbnail.childImageSharp.fluid} />
                  </div>
                )}
                <small>{date}</small>
                <p>
                  {category.map((item, i) => (
                    <span key={`${item}__${i}`}>{item}</span>
                  ))}
                </p>
              </header>
              <section>
                <Link to={`/blog/${slug}`}>
                  <h2>{title}</h2>
                </Link>
                <p>
                  {`${description.slice(0, 220)} ...`}
                  {` `}
                  <span>
                    <Link className="readmore" to={`/blog/${slug}`}>
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
              ← Pagina Precedente
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Pagina Successiva →
            </Link>
          )}
        </ArchivePagination>
      </Wrapper>
    </Layout>
  );
};

export default BlogArchive;

export const pageQuery = graphql`
  query Posts($skip: Int! = 0, $limit: Int!) {
    site {
      siteMetadata {
        baseUrl
        twitterAccount
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
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
            description
            slug
            date(formatString: "DD MMMM YYYY", locale: "it")
            metadate
            category
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
    }
  }
`;
