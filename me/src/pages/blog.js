import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

import BannerLanding from '../components/BannerLanding'

const Blog = (props) => {
    const postList = props.data.allMarkdownRemark;

    return (
        <Layout>
            <Helmet
                title="Sarah Morash"
                meta={[
                    { name: 'description', content: 'Sarah Morash' },
                    { name: 'keywords', content: 'portfolio, blog, personal, coding, technology' },
                ]}
            >
            </Helmet>

            <BannerLanding title="Blog" subtitle="Check out my latests posts" />

            <div id="main" className="alt">

                <section id="one">
                    <div className="inner">
                        {postList.edges.map(({ node }, i) => (
                            <Link to={node.fields.slug} className="link" >
                            <div className="post-list">
                                <h1>{node.frontmatter.title}</h1>
                                <span>{node.frontmatter.date}</span>
                                <p>{node.excerpt}</p>
                            </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>

        </Layout>
    );
}

export default Blog

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
            fields{
                slug
            }
            excerpt(pruneLength: 250)
            frontmatter {
                date(formatString: "MMMM Do YYYY")
                title
            }
        }
      }
    }
  }
`