import { useState } from 'react'
import { Link } from 'react-router-dom'       // Package for page routing
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoutes from './routes'              // Importing routing index for page routing
import Navbar from './components/Navbar'      // Import navbar for cleaner look
import './App.css'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  ) 
}

export default App
