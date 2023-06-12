const path = require(`path`);
const fs = require("fs");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data = [] } = await graphql(`
    {
      allContentfulPage {
        nodes {
          title
        }
      }
    }
  `);

  const PageTemplate = path.resolve(`src/templates/Page.jsx`);

  data.allContentfulPage.nodes.forEach((item) => {
    createPage({
      component: PageTemplate,
      path: `pages/${item.title}`,
      context: {
        ...item,
      },
    });
  });
};
