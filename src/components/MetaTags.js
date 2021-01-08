import React from "react";
import { Helmet } from "react-helmet";

export function PostMetaTags({ post }) {
  const { baseUrl, twitterAccount } = post.site.siteMetadata;
  const {
    title,
    metadate,
    description,
    thumbnail,
    slug,
  } = post.markdownRemark.frontmatter;

  const canonical = `${baseUrl}/blog/${slug}`;
  const ogImage = thumbnail
    ? `${baseUrl}${thumbnail.childImageSharp.fluid.src}`
    : `${baseUrl}${post.defaultImage.publicURL}`;

  return (
    <Helmet>
      <html lang="it" />
      <link rel="canonical" href={canonical} />
      <meta name="generator" content="Mulphy: Your Next Digital Agency" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterAccount} />
      <meta name="twitter:creator" content={twitterAccount} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />
      {metadate ? (
        <meta property="article:published_time" content={metadate} />
      ) : null}

      <meta property="og:site_name" content="Mulphy" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta property="og:locale" content="it_IT" />
      <title>{title} - Mulphy</title>
    </Helmet>
  );
}

export function PageMetaTags(props) {
  return (
    <Helmet>
      <html lang="it" />
      <title>{props.title} - Mulphy</title>
    </Helmet>
  );
}
