import Math from 'mathjs'
import React from 'react'
import { connect } from 'react-redux'
import { addRec } from '../actions'

let Panel = ({ dispatch }) => {
  return (
    <div>
        <button onClick={ event => {
            event.preventDefault();
            let x = Math.floor(Math.random() * 100) + 1;
            let y = Math.floor(Math.random() * 100) + 1;
            dispatch(addRec(x, y));
        }
        }>
          Add Rec
        </button>
    </div>
  )
}
Panel = connect()(Panel)

export default Panel
