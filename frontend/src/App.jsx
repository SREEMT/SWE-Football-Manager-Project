import { useState } from 'react'
import { Link } from 'react-router-dom'       // Package for page routing
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoutes from './routes'              // Importing routing index for page routing
import Navbar from './components/Navbar'      // Import navbar for cleaner look
import './App.css'
import Settings from './pages/Settings'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)
 // Settings is there for testing the design
  return (
    <>
      <Header/>
      <AppRoutes />
    </>
  ) 
}

export default App
