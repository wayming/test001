import React, { PropTypes } from 'react'

const Rectangle = ({x, y}) => (
    <rect x={x} y={y}>
    </rect>
)

Rectangle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Rectangle