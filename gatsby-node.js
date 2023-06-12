const path = require(`path`);
const fs = require("fs");
const AWS = require("aws-sdk");

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

exports.onPostBuild = async ({}) => {
  const s3 = new AWS.S3({});

  try {
    const data = {
      time: new Date().toString(),
    };

    await s3
      .putObject({
        Bucket: "gatsbysitepoc",
        Key: "outputFile.json",
        Body: JSON.stringify(data),
      })
      .promise();
    console.log("Successfully uploaded data to bucket");
  } catch (error) {
    console.log("error on s3 operation", error);
  }
};
