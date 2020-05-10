import React from 'react'
import { Geography } from 'react-simple-maps'

export default ({ geo, film, ...otherProps }) => {
  return (
    <Geography
      geography={geo}
      fill={film.title ? '#00c851' : '#DDD'}
      stroke="#FFF"
      style={{ outline: 'none' }}
      onClick={() => {
        console.log('Clicked on', geo.properties.NAME)
      }}
      {...otherProps}
    />
  )
}
