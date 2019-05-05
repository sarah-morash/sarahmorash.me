import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import BannerLanding from "../components/BannerLanding";

const Blog = props => {
  const getPosts = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet>
        <title>BLOG | Sarah Morash</title>
        <meta
          name="description"
          content="All of the latest blog posts by Sarah Morash"
        />
        <meta
          name="keywords"
          content="portfolio, blog, personal, coding, technology, fitness, health, travel"
        />
        <meta
          property="og:description"
          content="All of the latest blog posts by Sarah Morash"
        />
        <meta property="og:title" content="Posts from Smore" />
        <meta property="og:url" content="https://www.sarahmorash.me/blog/" />
        <meta name="twitter:title" content="Posts from Smore" />
        <meta
          name="twitter:description"
          content="All of the latest blog posts by Sarah Morash"
        />
      </Helmet>

      <BannerLanding title="Blog" subtitle="Check out my latests posts" />

      <div id="main">
        <section id="one">
          <div className="inner">
            {getPosts.map(({ node }, i) => (
              <>
                <Link to={node.fields.slug} className="link blogPost">
                  <div className="post-list">
                    <div className="content">
                      <img
                        className="image"
                        src={encodeURI(node.frontmatter.thumbnail)}
                        alt={node.frontmatter.title}
                      />
                      <div className="innerContent">
                        <h1 className="title">{node.frontmatter.title}</h1>
                        <p className="description">
                          {node.frontmatter.description}
                        </p>
                        <p className="date">{node.frontmatter.date}</p>
                        <p className="readTime">{node.timeToRead} min read</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <hr className="separator" />
              </>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;

export const posts = graphql`
  query GetPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            description
            thumbnail
          }
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`;
