import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
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
