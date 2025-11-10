// Test home page tied to root
import '../styles/Home.css'
import { Link } from 'react-router-dom'  

export default function Home() {
    return (
        <main className="home-page">
            <h1>Welcome to the Home Page</h1>
            <p>This is a placeholder to test page routing</p>
        </main>
    )
}