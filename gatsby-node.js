const { path } = require("path");
// const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/BlogPost.js`);

  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      console.log(node);
      createPage({
        path: `/blog/posts/${node.slug}`,
        component: postTemplate,
        context: { slug: node.slug } // additional data can be passed via context
      });
    });
  });
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     });
//   }
// };
