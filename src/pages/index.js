import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tabs from '../components/tabs'

const IndexPage = () => {
  const {
    allFilmsJson: { nodes: films },
  } = useStaticQuery(graphql`
    query {
      allFilmsJson {
        nodes {
          country
          title
          description
          links {
            imdb
            justWatch
            rottenTomatoes
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Table" />
      <h1>Witter maps</h1>
      <p>
        A record of entries for Wittertainment's "A film for every country"
        feature.
      </p>
      <Tabs films={films} />
    </Layout>
  )
}

export default IndexPage
