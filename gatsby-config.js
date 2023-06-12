require("dotenv").config({
  path: `.env`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `siva's poc`,
    siteUrl: `https://www.sivaganesh.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["MY_APP_KEY"],
      },
    },
  ],
};
