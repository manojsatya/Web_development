import React from 'react';

import Navbar from "./components/Navbar"
//import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
//import Footer from "./components/Footer"


function App() {
  return (
    <div className = "todo-list">
      
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App;
