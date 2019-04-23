import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { graphql } from 'gatsby'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title, description } = post.frontmatter
  return (
    <Layout>
      <BannerLanding title={title} subtitle={description} />
      <section>
        <div className="inner">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      frontmatter {
        title
        description
      }
    }
  }
`
