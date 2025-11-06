import { useState } from 'react'
import NotFound from './NotFound'
// import './Login.css'
import { Link } from 'react-router-dom'  

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const API_URL = 'http://localhost:3000'         //Global var for api url, change this to support .env files for prod and dev

    // Function that calls API for user auth
    // DO NOT TOUCH -- FUNCTIONALITY WILL BE ADDED
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Login form submitted:', { email, password })
        
        //Login api call
        try {
            const response = await fetch(`${API_URL}/session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                credentials: 'include',
                body: JSON.stringify({
                    email_address: email,
                    password: password,
                }),
            })

            if (!response.ok) {
                const data = await response.json().catch(() => ({}))
                throw new Error(data.error || 'Login failed')
            }

            setSuccess(true)
            console.log('Login Success')
        } catch (err) {
            console.error('login error: ', err)
            setError(err.message)
        }
    }

    // Renders the page for the login
    // Also handles user input and calls api function
    return (
        <div className='loginClass'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">login</button>
            </form>

            <a class= "another_link" href="forgotPassword" target='_blank' >Forgot Password</a> 
             
           
        </div>
    )
}