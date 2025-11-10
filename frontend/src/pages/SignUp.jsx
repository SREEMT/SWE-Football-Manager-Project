import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [form, setForm] = useState({
    email: "",
    age: "",
    parentEmail: ""});
    const [error, setError] = useState(null)
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Function that calls API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)
        console.log('Sign up form submitted:', {form})

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
    };

    const isMinor = form.age && Number(form.age) < 18;

    return (
        <div className='signInClass'>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <label>Age:</label>
                <input
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    required
                />

                {isMinor && (
                    <>
                    <label>Parent Email:</label>
                    <input
                        name="parentEmail"
                        type="email"
                        value={form.parentEmail}
                        onChange={handleChange}
                        required
                    />
                    </>
                )}
            
            <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
    );

}
 