import React from "react";
import Layout from "./Layout";
import Banner from "../components/Banner";
import { graphql } from "gatsby";

/**
 * BlogPost
 * Creates a blog post from a markdown file
 */
const BlogPost = ({ data }) => {
  const { title, date, subHeading, postedDate } = data.allContentfulBlogPost;
  const heroImage = data.allContentfulBlogPost.heroImage.file.url;
  const blogContent = data.allContentfulBlogPost.content.content.value;

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

export const query = graphql`
  query blogQuery($slug: String!) {
    contentfulBlogPost($slug: { eq: $slug }) {
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
    }
  }
`;
