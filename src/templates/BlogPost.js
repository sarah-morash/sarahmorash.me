import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "./Layout";
import Banner from "../components/Banner";

/**
 * BlogPost
 * Creates a blog post from a markdown file
 */
const BlogPost = ({ data }) => {
  console.log(data);
  const { title, date, subHeading } = data.markdownRemark.frontmatter;
  const featuredImage =
    data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  const blogContent = data.markdownRemark.html;

  return (
    <Layout>
      <Banner title={title} subtitle={subHeading} />
      <section className="blogPost">
        <div className="inner">
          <Img className="image" alt={title} fluid={featuredImage} />
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
        </div>
        <span className="date">{date}</span>
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
        subHeading
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        timeToRead
        keywords
      }
    }
  }
`;
