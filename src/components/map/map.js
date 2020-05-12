import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'
import Card from 'react-bootstrap/Card'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

export default ({ makeOnClick, films, currentFilm }) => {
  return (
    <Card>
      <ComposableMap
        projectionConfig={{
          scale: 155,
          rotation: [-11, 0, 0],
        }}
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const film = films.find(
                  film => film.country === geo.properties.NAME
                )
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      film.title
                        ? currentFilm && currentFilm.title === film.title
                          ? '#007bff'
                          : '#00c851'
                        : '#DDD'
                    }
                    stroke="#FFF"
                    style={{ outline: 'none' }}
                    onClick={makeOnClick(film)}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Card>
  )
}
