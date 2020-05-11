import React, { memo, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ComposableMap, Geographies, ZoomableGroup } from 'react-simple-maps'
import ReactTooltip from 'react-tooltip'
import Country from './country'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const CardContent = ({ film }) => (
  <>
    <h3 className="card-title">{film.country}</h3>
    <h5 className="card-subtitle mb-2">{film.title}</h5>
    <p className="card-text">{film.description}</p>
    {film.links.imdb && (
      <a className="card-link" href={film.links.imdb}>
        IMDB
      </a>
    )}
    {film.links.justWatch && (
      <a className="card-link" href={film.links.justWatch}>
        JustWatch
      </a>
    )}
    {film.links.rottenTomatoes && (
      <a className="card-link" href={film.links.rottenTomatoes}>
        RottenTomatoes
      </a>
    )}
  </>
)

const Atlas = ({ setCardContent }) => {
  const [tooltipContent, setTooltipContent] = useState('')
  const {
    allFilmsJson: { nodes: films },
  } = useStaticQuery(graphql`
    query {
      allFilmsJson {
        nodes {
          country
          title
          description
          links {
            imdb
            justWatch
            rottenTomatoes
          }
        }
      }
    }
  `)
  return (
    <div>
      <ComposableMap
        projectionConfig={{
          scale: 155,
          rotation: [-11, 0, 0],
        }}
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
        data-tip=""
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const film = films.find(
                  film => film.country === geo.properties.NAME
                )
                return (
                  <Country
                    key={geo.rsmKey}
                    geo={geo}
                    film={film}
                    onMouseEnter={
                      film.title
                        ? () => {
                            setTooltipContent(
                              `${geo.properties.NAME} — ${film.title}`
                            )
                          }
                        : null
                    }
                    onMouseLeave={() => {
                      setTooltipContent('')
                    }}
                    onClick={() => {
                      film.title
                        ? setCardContent(<CardContent film={film} />)
                        : setCardContent(null)
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
    </div>
  )
}

export default memo(Atlas)
