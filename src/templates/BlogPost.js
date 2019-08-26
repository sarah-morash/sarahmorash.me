import React from "react";
import Layout from "./Layout";
import Banner from "../components/Banner";
import { graphql } from "gatsby";

/**
 * BlogPost
 * Creates a blog post from a markdown file
 */
const BlogPost = ({ data }) => {
  const {
    title,
    description,
    thumbnail,
    date
  } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <Banner title={title} subtitle={description} />
      <section className="blogPost">
        <div className="inner">
          <img className="image" src={encodeURI(thumbnail)} alt={title} />
          <div className="text" dangerouslySetInnerHTML={{ __html: html }} />
          <span className="date">{date}</span>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        description
        thumbnail
        timeToRead
      }
    }
  }
`;
