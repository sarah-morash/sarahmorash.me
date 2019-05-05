module.exports = {
  siteMetadata: {
    title: "Sarah Morash",
    author: "Sarah Morash",
    description: "A portfolio site & blog"
  },
  mapping: {
    "MarkdownRemark.fields.posts": "MarkdownRemark"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png"
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "imgs",
    //     path: `/${__dirname}/src/assets/images/`
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline"
  ]
};
