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
          listenAgain {
            date
            timestamp
            href
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <p>
        A record of entries for Wittertainment's "A film for every country"
        feature. Click on countries on the map or search the table.
      </p>
      <Tabs films={films} />
    </Layout>
  )
}

export default IndexPage
