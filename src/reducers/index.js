import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import recs from './recs'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  recs
})

export default todoApp
