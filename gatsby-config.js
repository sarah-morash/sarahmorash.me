const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Sarah Morash`,
    description: `My personal site.`,
    author: `@sarah_morash`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Smore's Portfolio`,
        short_name: `Smore`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images"
      }
    },
    `gatsby-plugin-offline`
  ]
};
