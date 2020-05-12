import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Card from './card'
import Map from './map'

const InteractiveMap = ({ films, currentFilm, setCurrentFilm }) => (
  <Row className="my-3">
    <Col className="mb-3 mb-lg-0" lg={8} xs={12}>
      <Map
        makeOnClick={film => () => setCurrentFilm(film)}
        films={films}
        currentFilm={currentFilm}
      />
    </Col>
    <Col lg={4} xs={12}>
      <Card film={currentFilm} />
    </Col>
  </Row>
)

export default InteractiveMap
