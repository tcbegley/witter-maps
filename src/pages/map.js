import React from 'react'
import Card from 'react-bootstrap/card'
import Layout from '../components/layout'
import Atlas from '../components/map/atlas'
import SEO from '../components/seo'

const MapPage = () => (
  <Layout>
    <SEO title="Map" />
    <h1 className="text-success">Map</h1>
    <p>Click on any country to see the chosen film!</p>
    <Card className="my-5">
      <Atlas />
    </Card>
  </Layout>
)

export default MapPage
