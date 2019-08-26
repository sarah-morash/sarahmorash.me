import React, { useState } from "react";
import classnames from "classnames";
import { Link, graphql } from "gatsby";

import Head from "../components/Head";
import Layout from "../templates/Layout";
import Banner from "../components/Banner";

const Blog = ({ data }) => {
  const [showArrows, setShowArrows] = useState(false);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Head title="Blog" />

      <Banner title="Blog" subtitle="Check out my latests posts" />

      <div id="main">
        <section id="one">
          <div className="inner">
            {posts.map(({ node }, i) => (
              <Link
                to={node.fields.slug}
                className="link blogPost"
                key={i}
                onMouseOver={() => setShowArrows(true)}
                onMouseOut={() => setShowArrows(false)}
              >
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
                    <div
                      className={classnames(
                        showArrows && "showArrows",
                        "arrows"
                      )}
                    >
                      <span className="arrow-1">></span>
                      <span className="arrow-2">></span>
                      <span className="arrow-3">></span>
                    </div>
                  </div>
                </div>
                <hr className="separator" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;

export const postQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fileAbsolutePath
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            description
            thumbnail
            timeToRead
          }
        }
      }
    }
  }
`;
