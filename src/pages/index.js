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
      { label: 'Selected', field: 'selected' },
    ],
    rows: films.map(({ title, country }) => ({
      title,
      country,
      selected: title !== undefined,
    })),
  }
  return (
    <Layout>
      <SEO title="Table" />
      <MDBDataTable striped bordered hover data={data} />
    </Layout>
  )
}

export default IndexPage
