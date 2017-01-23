import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SVG from './SVG'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <SVG />
  </div>
)

export default App
