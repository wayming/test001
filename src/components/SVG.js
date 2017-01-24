import React, { PropTypes } from 'react'
import Rectangle from './Rectangle'

const SVG = ({ recs }) => (
  <SVG>
    {recs.map(rec =>
      <Rectangle
        x={rec.x}
        y={rec.y}
      />
    )}
  </SVG>
)

SVG.propTypes = {
  recs: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired).isRequired
}

export default SVG
