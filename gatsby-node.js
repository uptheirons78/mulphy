const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

async function makePostsFromMarkdown({ graphql, actions }) {
  const postTemplate = path.resolve(`./src/templates/blog-post.js`);
  const { errors, data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { fields: [frontmatter___date], order: DESC }
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
        collection: "posts",
        pathPrefix: "/blog",
      },
    });
  });
}

async function makeProjectsFromMarkdown({ graphql, actions }) {
  const projectsTemplate = path.resolve(`./src/templates/project.js`);
  const { errors, data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___date], order: DESC }
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

  if (errors) {
    console.log(errors);
    throw new Error("There was an error");
  }

  const projects = data.allMarkdownRemark.edges;

  projects.forEach((project, index) => {
    const id = project.node.id;
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;
    actions.createPage({
      path: `/projects/${project.node.frontmatter.slug}`,
      component: projectsTemplate,
      context: {
        slug: project.node.frontmatter.slug,
        id,
        previous,
        next,
        collection: "projects",
        pathPrefix: "/projects",
      },
    });
  });
}

async function paginate({
  graphql,
  actions,
  collection,
  pathPrefix,
  component,
}) {
  const { errors, data } = await graphql(
    `
      {
        allMarkdownRemark(filter: { fields: { collection: { eq: "${collection}" } } }) {
          totalCount
        }
      }
    `
  );
  if (errors) {
    console.log(errors);
    throw new Error("There was an error");
  }
  const { totalCount } = data.allMarkdownRemark;
  const postsPerPages = 5;
  const pages = Math.ceil(totalCount / postsPerPages);

  Array.from({ length: pages }).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    actions.createPage({
      // path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      path: i === 0 ? `${pathPrefix}` : `${pathPrefix}${i + 1}`,
      component,
      context: {
        limit: postsPerPages,
        skip: i * postsPerPages,
        pages,
        currentPage: i + 1,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([
    makePostsFromMarkdown({ graphql, actions }),
    makeProjectsFromMarkdown({ graphql, actions }),
    paginate({
      graphql,
      actions,
      collection: "projects",
      pathPrefix: "/projects/",
      component: path.resolve("./src/templates/projects-archive.js"),
    }),
    paginate({
      graphql,
      actions,
      collection: "posts",
      pathPrefix: "/blog/",
      component: path.resolve("./src/templates/blog-archive.js"),
    }),
  ]);
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
