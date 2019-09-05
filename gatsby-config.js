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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/pages/blog/posts`
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
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "eq9i4a4mfsbm",
        accessToken: "7okg8wCHU0-R-DA2YFJCBAEC55IRXt4tjvQhtklL3P8"
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
