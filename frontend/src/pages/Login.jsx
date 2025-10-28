import { useState } from 'react'
import NotFound from './NotFound'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Function that calls API for user auth
    // DO NOT TOUCH -- FUNCTIONALITY WILL BE ADDED
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login form submitted:', { email, password })
        // Connect Rails API here later
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