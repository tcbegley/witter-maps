import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

export default ({ makeOnClick, films, currentFilm }) => {
  const isServer = typeof window === 'undefined'
  return (
    <ComposableMap
      projectionConfig={{
        scale: 155,
        rotation: [-11, 0, 0],
      }}
      width={800}
      height={400}
      style={{
        width: '100%',
        height: 'auto',
        backgroundColor: '#e9e9e9',
        borderRadius: '0.25rem',
      }}
    >
      <ZoomableGroup
        zoom={isServer ? 0.95 : window.innerWidth >= 992 ? 0.8 : 0.95}
        center={isServer ? [0, 0] : window.innerWidth >= 992 ? [70, 0] : [0, 0]}
        minZoom={0.75}
        maxZoom={10}
      >
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
                      : '#fafafa'
                  }
                  stroke="#d0d0d0"
                  style={{ outline: 'none' }}
                  onClick={makeOnClick(film)}
                />
              )
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  )
}
