import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/SignUp.css'
import API_URL from "../lib/api.js";
import CalendarIcon from "../images/calendarIcons.svg?react";
import { useAuth } from '../context/AuthContext'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [dob, setDob] = useState("")
    const [age, setAge] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()                      // Used to reload page or take users to other pages
    const { login } = useAuth()  // verifies that the user is to be logged in

    /* function to calculate age */ /*not used yet*/
    const verifyAge = (birthdate) => {
        const today = new Date();
        const birth = new Date(birthdate);
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    /*to link backend with frontend */
    const handleSignUpSubmit = async (e) => {
        e.preventDefault();  // Prevent message from disappearing on submit

         if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
        }

        try {
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user: {
                    email_address: email, password: password, first_name: firstName, last_name: lastName, phone_number: phoneNumber, date_of_birth: dob, role: 1 }}),
            });

            const data = await response.json();
            console.log("Rails response:", data);

            if (response.ok) {
            await login(email, password) // logs the user in after creation
                setMessage(data.message);
                navigate('/', { replace: true }) /* navigates to home page with user signed in*/
            } else {
                setMessage(data.errors?.join(", ") || data.message || "Signup failed");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            // setMessage("Something went wrong. Please try again later.");
        }
    }

    return (
        <div className="signUpPage">

            <header className="signUpHeader">
                <h1>SIGN UP</h1>
            </header>

            <div className="signupFields">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="Password"
                    placeholder="Enter AlphaNumerical password here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <input
                    type="Password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)} />

                <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />

                <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)} />

                <div className="input-wrapper">
                    <input
                        id="dob"
                        type="date"
                        value={dob}
                        onChange={(e) => {
                            const date = e.target.value;
                            setDob(date);
                            setAge(verifyAge(date));
                        }}
                    />
                    <span className="calendar"
                        onClick={() => document.getElementById("dob").showPicker?.()}
                    >
                        <CalendarIcon className="thisIcon" />
                    </span>
                </div>

                <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    pattern="[0-9]{10}"
                />

                <button type="submit" onClick={handleSignUpSubmit}>Create Account</button>
                <p>{message}</p>

            </div>

            <footer>
                <p>&copy; KEEPER .</p>
            </footer>

        </div>
    )

}

