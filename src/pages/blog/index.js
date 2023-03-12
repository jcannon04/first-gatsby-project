import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
        {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <Link to={node.frontmatter.slug}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
        ))}
    </Layout>
  )
}

export const data = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`
export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
