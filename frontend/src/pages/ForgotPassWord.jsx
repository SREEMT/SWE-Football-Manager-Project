import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/ForgotPass.css'

export default function ForgotPassword() {
       const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (e) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
 
    const checkEmail = async (e) => {
        e.preventDefault();  // Prevent message from disappearing on submit
    if (email === "") {
        setMessage("Email field cannot be empty.");
    }
    else if (!validateEmail(email)) {
        setMessage("Please enter a valid email address.");
    }
    else {  
           try {
    const response = await fetch("http://localhost:3000/passwords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email_address: email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      // TODO: show OTP input popup here
      
   setMessage("A password reset link has been sent to your email.");
        // create pop-up for user to type in code they received
    } else {
      setMessage(data.error);
    }
  } catch (err) {
      console.error("Fetch error:", err);
    setMessage("Something went wrong. Please try again later.");
  }
    }};

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
