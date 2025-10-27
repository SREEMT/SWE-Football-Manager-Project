import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import WebLogo from './assets/WebLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <>
      <a target="_blank">
          <img src={WebLogo} className="logo" alt="Logo" />
        </a>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <div style="overflow-y: scroll; height: 200px; width: 300px; border: 1px solid black;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, lorem non tincidunt fermentum, sapien justo tincidunt libero, nec tincidunt ligula magna vel eros. Suspendisse potenti
      </div> */}

      <div style={{ position: "relative", display: "inline-block" }}>
      {/* Button to toggle dropdown */}
      <button onClick={toggleDropdown} className="menudropdowndutton">
        Menu
      </button>

      {/* Dropdown items */}
      {isOpen && (
        <ul className="menudropdown">
          <li className="item"><a href="#" target="_blank">Link</a></li>
          <li className="item"><a href="#" target="_blank">Link</a></li>
          <li className="item"><a href="#" target="_blank">Link</a></li>
        </ul>
        )}
      </div>
    </>
  )
}


export default App
