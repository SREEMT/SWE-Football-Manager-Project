import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Login.css';

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
                navigate('/', { replace: true })
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
        <div className='login-wrapper'>
            <aside>
                <div className='aside-upper'>
                    <h2>Sign-up here</h2>
                    <p>Join the Keeper crew and manage your soccer career</p>
                    <Link to="/sign-up" className='btn-secondary'>Sign-up</Link>
                </div>
                <div className="aside-lower">
                    <p>Take a peek into the Keeper family</p>
                    <Link to="#" className='btn-secondary'>Guest</Link>
                </div>
            </aside>
            <form onSubmit={handleSubmit}>
                <h1>Login into your account</h1>
                <div className="form-group">
                    <input 
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <Link to="#" className='btn-link'>Forgot password?</Link>
                </div>
                {error && <p className="error">{error}</p>}
                <button className='btn-primary' type="submit">Sign-in</button>
            </form>
            {/* <form onSubmit={handleSubmit}>
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

            <a class="another_link" href="forgotPassword" target='_blank' >Forgot Password</a>
            <Link to="/sign-up" className="another_link" >Don't have an account? Register here</Link> */}



        </div>
    )
}