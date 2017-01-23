import Math from 'Math'
import React from 'react'
import { connect } from 'react-redux'
import { addRec } from '../actions'

let Panel = ({ dispatch }) => {


  return (
    <div>

        <button onClick={ event => {
            e.preventDefault();
            let x = Math.floor(Math.random() * 100) + 1;
            let y = Math.floor(Math.random() * 100) + 1;
            dispatch(x, y);
        }
        }>
          Add Rec
        </button>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
