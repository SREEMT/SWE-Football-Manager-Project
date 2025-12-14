import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import '../styles/Signup.css';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [age, setAge] = useState();
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
        <div className='signup-wrapper'>
            <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <h1>Sign-up</h1>
                 <div className="form-group">
                    <FaRegSmile />
                    <input 
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <MdOutlineEmail />
                    <input 
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <IoLockClosedOutline />
                    <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                 <div className="form-group">
                    <FaRegSmile />
                    <input
                    type="number"
                    placeholder='Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    />
                </div>
                <div className='form-ext form-agree'>
                    <input type="checkbox" name="agree" id='agree' />
                    <label htmlFor="agree">
                        I read and agree to <Link to="#">Terms & Conditions</Link>
                    </label>
                </div>
                {error && <p className="error">{error}</p>}
                <div className='form-ext'>
                    <button className='btn-primary' type="submit">Create Account</button>
                </div>
                <div className='form-ext'>
                    <p>Already have an account? </p><Link to="/login" className='btn-link'>Login</Link>
                </div>
            </form>
            </div>
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















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function SignUp() {
//     const [form, setForm] = useState({
//     email: "",
//     age: "",
//     parentEmail: ""});
//     const [error, setError] = useState(null)
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     // Function that calls API
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null)
//         console.log('Sign up form submitted:', {form})

        {/*
        try {
            const success = await signin(email, password)
            if (success) {
                console.log('Signin successful')
                navigate('/', { replace: true})
            } else {
                setError('Invalid Credentials')
            }
        } catch (err) {
            console.error('Login error:', err)
            setError(err.message)
        }
            */}
//     };

//     const isMinor = form.age && Number(form.age) < 18;

//     return (
//         <div className='signInClass'>
//             <h2>Create an Account</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Email:</label>
//                 <input
//                     name="email"
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label>Age:</label>
//                 <input
//                     name="age"
//                     type="number"
//                     value={form.age}
//                     onChange={handleChange}
//                     required
//                 />

//                 {isMinor && (
//                     <>
//                     <label>Parent Email:</label>
//                     <input
//                         name="parentEmail"
//                         type="email"
//                         value={form.parentEmail}
//                         onChange={handleChange}
//                         required
//                     />
//                     </>
//                 )}
            
//             <button type="submit">Sign Up</button>
//             </form>
//             <p>
//                 Already have an account? <Link to="/login">Sign In</Link>
//             </p>
//         </div>
//     );

// }
 