const { path } = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/BlogPost.js`);

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      const posts = result.data.allContenfulPost.edges;

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === posts.length + 1 ? null : posts[index - 1].node;

        createPage({
          path: `/blog/posts/${post.node.slug}`,
          component: postTemplate,
          context: { slug: post.node.slug, previous, next }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};
