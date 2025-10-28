import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
       const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (e) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
 
    const checkEmail = (e) => {
        e.preventDefault();
    if (!validateEmail(email)) {
        setMessage("Please enter a valid email address.");
    }
    else if (email === "") {
        setMessage("Email field cannot be empty.");
    }else {
        setMessage("A password reset link has been sent to your email.");
    }}

    return ( 
        <div>
            <h2>Forgot Password</h2>
             <p>
                Enter your email address below and we'll send you a link to reset your password.
            </p>

            <form>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                    />
                </div>
                       
                    <button class="button1" onClick={checkEmail}>Send Code</button>
                    <p>{message}</p>
             </form>  
                </div>)}   
