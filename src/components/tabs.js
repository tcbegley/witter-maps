import React from 'react'
import { MDBDataTable } from 'mdbreact'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

import InteractiveMap from './map/interactive-map'

export default ({ films }) => {
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
    <Tab.Container defaultActiveKey="chosen">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as="span" eventKey="chosen">
            Chosen
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as="span" eventKey="upForGrabs">
            Up for grabs
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content className="py-4">
        <Tab.Pane eventKey="chosen">
          <MDBDataTable striped bordered hover noBottomColumns data={data} />
          <InteractiveMap films={films} />
        </Tab.Pane>
        <Tab.Pane eventKey="upForGrabs">
          <div>Up for grabs</div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  )
}
