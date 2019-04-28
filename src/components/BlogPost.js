import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { graphql } from 'gatsby'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title, description, thumbnail, date } = post.frontmatter
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
  )
}

export default BlogPost
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`

export const post = graphql`
  query GetPost {
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
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`
