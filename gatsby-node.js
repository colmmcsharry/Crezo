var path = require("path");

/*remember that projects were originally blogs*/
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blog-post.js");
    resolve(
      graphql(`
        {
          allContentfulProjects(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProjects.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return;
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
  })
}
