const initialState = [ {x:100, y:100} ]

const recs = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REC':
      return [
          ...state,
          {
              x: action.x,
              y: action.y
          }
      ]

    default:
      return state
  }
}

export default recs
