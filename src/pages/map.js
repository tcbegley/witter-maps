import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Layout from '../components/layout'
import Atlas from '../components/map/atlas'
import SEO from '../components/seo'

const MapPage = () => {
  const [cardContent, setCardContent] = useState(null)
  const defaultCardContent = (
    <>
      <h3 className="card-title">Nothing selected</h3>
      <p>Click on a country on the map</p>
    </>
  )
  return (
    <Layout>
      <SEO title="Map" />
      <h1 className="text-success">Map</h1>
      <p>Click on any country to see the chosen film!</p>
      <Row className="my-5">
        <Col className="mb-3 mb-lg-0" lg={8} xs={12}>
          <Card>
            <Atlas setCardContent={setCardContent} />
          </Card>
        </Col>
        <Col lg={4} xs={12}>
          <Card className="h-100">
            <Card.Body>
              {cardContent !== null ? cardContent : defaultCardContent}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default MapPage
