import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()                      // Used to reload page or take users to other pages
    const { login } = useAuth()

    // Function that calls API for user auth
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        console.log('Login form submitted:', { email, password })
        
        //Login api call
        try {
            const success = await login(email, password)
            if (success) {
                console.log('Login successful')
                navigate('/', { replace: true})
            } else {
                setError('Invalid Credentials')
            }
        } catch (err) {
            console.error('Login error:', err)
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