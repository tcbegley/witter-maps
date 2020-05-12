import React, { useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

import InteractiveMap from './map/interactive-map'

const linkLookup = [
  { name: 'overCast', label: 'Listen again' },
  { name: 'imdb', label: 'IMDb' },
  { name: 'rottenTomatoes', label: 'Rotten Tomatoes' },
  { name: 'justWatch', label: 'JustWatch' },
]

const linksToList = links => {
  let linkElements = linkLookup
    .filter(item => links[item.name])
    .map(item => (
      <a
        href={links[item.name]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        {item.label}
      </a>
    ))
  // add spacing between links
  const indices = [1, 3, 5]
  indices.forEach(i => {
    if (linkElements.length > i) {
      linkElements.splice(i, 0, ' · ')
    }
  })

  return linkElements
}

const listenAgainToValue = ({ date, timestamp }) => `${date} (${timestamp})`

const ChosenContent = ({ films }) => {
  const [currentFilm, setCurrentFilm] = useState(null)

  const chosenFilms = films.filter(film => film.title)
  const chosenData = {
    columns: [
      { label: 'Country', field: 'country' },
      { label: 'Title', field: 'title' },
      { label: 'Links', field: 'links', width: 'auto', sort: 'disabled' },
      { label: 'Listen Again', field: 'listenAgain' },
    ],
    rows: chosenFilms.map(film => ({
      title: film.title,
      country: film.country,
      links: linksToList(film.links),
      listenAgain: listenAgainToValue(film.listenAgain),
      clickEvent: () => setCurrentFilm(film),
    })),
  }
  return (
    <>
      <InteractiveMap
        films={films}
        currentFilm={currentFilm}
        setCurrentFilm={setCurrentFilm}
      />
      <MDBDataTable
        id="chosen"
        striped
        bordered
        hover
        noBottomColumns
        data={chosenData}
      />
    </>
  )
}

const UnchosenContent = ({ films }) => {
  const unchosenFilms = films.filter(film => !film.title)
  const unchosenData = {
    columns: [{ label: 'Country', field: 'country' }],
    rows: unchosenFilms.map(({ country }) => ({
      country,
    })),
  }
  return (
    <MDBDataTable
      id="unchosen"
      striped
      bordered
      hover
      noBottomColumns
      data={unchosenData}
    />
  )
}

export default ({ films }) => {
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
          <ChosenContent films={films} />
        </Tab.Pane>
        <Tab.Pane eventKey="upForGrabs">
          <UnchosenContent films={films} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  )
}
