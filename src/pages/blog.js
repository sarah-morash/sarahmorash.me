import React, { useState } from "react";
import classnames from "classnames";
import dayjs from "dayjs";
import { Link, graphql } from "gatsby";

import Head from "../components/Head";
import Layout from "../templates/Layout";
import Banner from "../components/Banner";

const Blog = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  const [showArrows, setShowArrows] = useState(null);

  return (
    <Layout>
      <Head title="Blog" />

      <Banner title="Blog" subtitle="Check out my latests posts" />

      <div id="main">
        <section id="one">
          <div className="inner">
            {blogPosts.map(({ node }, i) => (
              <Link
                to={`/blog/posts/${node.slug}`}
                className="link blogPost"
                key={node.id}
                onMouseOver={() => setShowArrows(i)}
                onMouseOut={() => setShowArrows(null)}
              >
                <div className="post-list">
                  <div className="content">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          node.heroImage !== null
                            ? `url(${encodeURI(node.heroImage.file.url)})`
                            : ""
                      }}
                      alt={node.title}
                    />
                    <div className="innerContent">
                      <h1 className="title">{node.title}</h1>
                      <p className="description">{node.subHeading}</p>
                      <p className="date">
                        {node.postedDate &&
                          dayjs(node.postedDate).format("DD•MM•YY")}
                      </p>
                      <p className="readTime">
                        {node.timeToRead && `${node.timeToRead} min read`}
                      </p>
                    </div>
                    <div
                      className={classnames(
                        showArrows === i && "showArrows",
                        "arrows"
                      )}
                    >
                      <span className="arrow-1">></span>
                      <span className="arrow-2">></span>
                      <span className="arrow-3">></span>
                    </div>
                  </div>
                  <hr className="separator" />
                </div>
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
  {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          subHeading
          postedDate
          heroImage {
            id
            file {
              url
            }
          }
          blogContent {
            id
            content {
              content {
                value
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`;
