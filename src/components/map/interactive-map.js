import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Card from './card'
import Map from './map'

const InteractiveMap = ({ films }) => {
  const [currentFilm, setCurrentFilm] = useState(null)

  return (
    <Row className="my-5">
      <Col className="mb-3 mb-lg-0" lg={8} xs={12}>
        <Map makeOnClick={film => () => setCurrentFilm(film)} films={films} />
      </Col>
      <Col lg={4} xs={12}>
        <Card film={currentFilm} />
      </Col>
    </Row>
  )
}

export default InteractiveMap
