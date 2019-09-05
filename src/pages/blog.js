import React, { useState } from "react";
import classnames from "classnames";
import dayjs from "dayjs";
import { Link, graphql } from "gatsby";

import Head from "../components/Head";
import Layout from "../templates/Layout";
import Banner from "../components/Banner";

const Blog = ({ data: { allContentfulBlogPost } }) => {
  const [showArrows, setShowArrows] = useState(false);

  return (
    <Layout>
      <Head title="Blog" />

      <Banner title="Blog" subtitle="Check out my latests posts" />

      <div id="main">
        <section id="one">
          <div className="inner">
            {allContentfulBlogPost.edges.map(({ node }, i) => (
              <Link
                to={node}
                className="link blogPost"
                key={i}
                onMouseOver={() => setShowArrows(true)}
                onMouseOut={() => setShowArrows(false)}
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
                        showArrows && "showArrows",
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
    allContentfulBlogPost {
      edges {
        node {
          id
          title
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
