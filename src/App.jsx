import { useState } from 'react'
import Header from './componentes/Header.jsx'
import Home from './componentes/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
