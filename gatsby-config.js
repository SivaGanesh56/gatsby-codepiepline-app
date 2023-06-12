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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        environment: "master",
        downloadLocal: false,
        pageLimit: 100,
      },
    },
    `gatsby-plugin-image`,
  ],
};
