import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {frontmatter.footnote && (
        <small className="text-muted">
          <sup>*</sup>
          {frontmatter.footnote}
        </small>
      )}
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/about" } }) {
      html
      frontmatter {
        slug
        title
        footnote
      }
    }
  }
`
