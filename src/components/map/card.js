import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ film }) => {
  let cardContent
  if (film && film.title) {
    cardContent = (
      <>
        <h3 className="card-title">{film.country}</h3>
        <h5 className="card-subtitle mb-2">{film.title}</h5>
        <p className="card-text">{film.description}</p>
        <p className="card-text">
          Listen again: {film.listenAgain.date} ({film.listenAgain.timestamp})
        </p>
        {film.links.imdb && (
          <a
            className="card-link"
            href={film.links.imdb}
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB
          </a>
        )}
        {film.links.justWatch && (
          <a
            className="card-link"
            href={film.links.justWatch}
            target="_blank"
            rel="noopener noreferrer"
          >
            JustWatch
          </a>
        )}
        {film.links.rottenTomatoes && (
          <a
            className="card-link"
            href={film.links.rottenTomatoes}
            target="_blank"
            rel="noopener noreferrer"
          >
            RottenTomatoes
          </a>
        )}
      </>
    )
  } else {
    cardContent = (
      <>
        <h3 className="card-title">Nothing selected</h3>
        <p className="card-text">Click a country on the map</p>
      </>
    )
  }
  return (
    <Card className="h-100">
      <Card.Body>{cardContent}</Card.Body>
    </Card>
  )
}
