import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/SignUp.css'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [dob, setDob] = useState("")



    return (
        <div className="SingUpPage">

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

                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />

                <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    pattern="[0-9]{10}"
                />


            </div>

        </div>
    )

}
