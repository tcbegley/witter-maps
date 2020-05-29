import React from 'react'

import Card from './card'
import Map from './map'

const InteractiveMap = ({ films, currentFilm, setCurrentFilm }) => (
  <div className="my-3 position-relative">
    <div className="mb-3 mb-lg-0">
      <Map
        makeOnClick={film => () => setCurrentFilm(film)}
        films={films}
        currentFilm={currentFilm}
      />
    </div>
    <div
      className="d-none d-lg-block position-absolute"
      style={{
        top: '20px',
        right: '20px',
        maxWidth: '300px',
        width: '300px',
        opacity: '95%',
      }}
    >
      <Card film={currentFilm} />
    </div>
    <div className="d-block d-lg-none">
      <Card film={currentFilm} />
    </div>
  </div>
)

export default InteractiveMap
