import React from "react";
import { graphql } from "gatsby";

import Layout from "./Layout";
import Banner from "../components/Banner";

/**
 * BlogPost
 * Creates a blog post from a markdown file
 */
const BlogPost = ({ data }) => {
  const { title, date, subHeading, postedDate } = data.contentfulBlogPost;
  const heroImage = data.contentfulBlogPost.heroImage.file.url;
  const blogContent = data.contentfulBlogPost.content.content.value;

  return (
    <Layout>
      <Banner title={title} subtitle={subHeading} />
      <section className="blogPost">
        <div className="inner">
          <img className="image" src={encodeURI(heroImage)} alt={title} />
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
          <span className="date">{date}</span>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
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
    }
  }
`;
