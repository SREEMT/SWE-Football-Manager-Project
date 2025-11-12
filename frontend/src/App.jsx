import { useState } from 'react'
// import { Link } from 'react-router-dom'       // Package for page routing
import AppRoutes from './routes'              // Importing routing index for page routing
import Navbar from './components/Navbar'      // Import navbar for cleaner look
import './App.css'


function App() {
 // Settings is there for testing the design
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  ) 
}

export default App
