import { useState } from 'react'
import { Link } from 'react-router-dom'       // Package for page routing
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRoutes from './routes'              // Importing routing index for page routing
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      </nav>

      <AppRoutes />
    </div>
  )
}

export default App
