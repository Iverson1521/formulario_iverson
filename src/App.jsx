import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formularios from './components/Formularios.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Formularios/>
  )
}

export default App
