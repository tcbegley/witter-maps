import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDBDataTable } from 'mdbreact'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const {
    allFilmsJson: { nodes: films },
  } = useStaticQuery(graphql`
    query {
      allFilmsJson {
        nodes {
          country
          title
          links {
            imdb
            justWatch
          }
        }
      }
    }
  `)
  const data = {
    columns: [
      { label: 'Country', field: 'country' },
      { label: 'Title', field: 'title' },
    ],
    rows: films.map(({ title, country }) => ({
      title,
      country,
    })),
  }
  return (
    <Layout>
      <SEO title="Table" />
      <h1>Witter maps</h1>
      <p>
        A record of entries for Wittertainment's "A film for every country"
        feature.
      </p>
      <MDBDataTable striped bordered hover noBottomColumns data={data} />
    </Layout>
  )
}

export default IndexPage
