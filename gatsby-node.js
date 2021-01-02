const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");
const { paginate } = require("gatsby-awesome-pagination");

async function makePostsFromMarkdown({ graphql, actions }) {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/blog-post.js`);
  const { errors, data } = await graphql(`
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

  paginate({
    createPage,
    items: data.allMarkdownRemark.edges,
    itemsPerPage: 2,
    pathPrefix: "/blog",
    component: path.resolve("src/templates/blog-archive.js"),
  });

  if (errors) {
    console.log(errors);
    throw new Error("There was an error");
  }

  const posts = data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const id = post.node.id;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    actions.createPage({
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
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([makePostsFromMarkdown({ graphql, actions })]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    // This is where we add our own custom fields to each node
    const generatedSlug = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug
        ? `/${node.frontmatter.slug}/`
        : generatedSlug,
    });

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};
