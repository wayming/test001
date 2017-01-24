import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DisplaySVG from '../containers/DisplaySVG'
import Panel from '../containers/Panel'


const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Panel />
    <DisplaySVG />
  </div>
)

export default App
