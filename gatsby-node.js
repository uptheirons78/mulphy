const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // Templates
  const postTemplate = path.resolve(`./src/templates/blog-post.js`);

  // Results
  const postsResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Check for errors
  if (postsResult.errors) {
    reporter.panic("Failed to create blog posts", postsResult.errors);
  }

  // Arrays
  const posts = postsResult.data.allMarkdownRemark.edges;

  // Create Pages
  // Post pages
  posts.forEach((post, index) => {
    const id = post.node.id;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: `/blog/${post.node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        id,
        previous,
        next,
      },
    });
  });
};
