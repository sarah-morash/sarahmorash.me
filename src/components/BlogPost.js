import React from "react";
import Layout from "../components/layout";
import BannerLanding from "../components/BannerLanding";
import { graphql } from "gatsby";

function BlogPost(props) {
  const getPost = props.data.allMarkdownRemark.edges[0].node;
  const { title, description, thumbnail, date } = getPost.frontmatter;
  return (
    <Layout>
      <BannerLanding title={title} subtitle={description} />
      <section className="blogPost">
        <div className="inner">
          <img className="image" src={encodeURI(thumbnail)} />
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <span className="date">{date}</span>
        </div>
      </section>
    </Layout>
  );
}

export default BlogPost;

export const post = graphql`
  query GetPost {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            description
            thumbnail
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
