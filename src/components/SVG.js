import React, { PropTypes } from 'react'

export default class SVG extends React.Component {
    render() {
        return (
<div>
<h1> mysvg </h1>
<button onClick={onClick}> add component </button>
</div>
        );
    }

}

SVG.propTypes = {
  text: PropTypes.string
}

