const path = require(`path`);

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
        name: "Smore's Portfolio",
        short_name: "Smore",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/assets/images/website-icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-141718999-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "sarahmorash.me"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/pages/blog/posts`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`
      }
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 1200
    //         }
    //       }
    //     ]
    //   }
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
