import React ,{ useState } from 'react'
import './App.css'
import ToDoList from './to-do.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
   <ToDoList/>
  )
}

export default App
