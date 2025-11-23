import { Link } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";
import VerifyCard from "../components/PasswordVerify.jsx"
import '../styles/Settings.css'
import { useState } from 'react';

export default function Settings(){
    const [showVerifyCard, setShowVerifyCard] = useState(false)

    const handleDelete = () => {
        setShowVerifyCard(true)
    }

    return (
        <section className='settings'>
            <h1>Settings</h1>
            <div className="settingsContainer">
                <div className='settingsNav'>
                    <ul>
                        <li><Link to="#">Profile change</Link></li>
                        <li><Link to="#">Password change</Link></li>
                        <li><Link to="#">Notification change</Link></li>
                        <li><button onClick={handleDelete}>Delete Account</button></li>
                    </ul>
                </div>
                <div className='settingsContent'>
                    <h2>Profile change</h2>
                    <div className='profileImage'>
                        <RxAvatar />
                        <button className='btn-primary'>Change photo</button>
                    </div>

                    <form className='profile-form'>
                        <div className='formGroup'>
                            <label htmlFor="bio">Bio</label>
                            <textarea id='bio'></textarea>
                        </div>
                        <div className='formGroup'>
                            <div className='formRow'>
                                <div className='formColumn'>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id='firstName'/>
                                </div>
                                 <div className='formColumn'>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id='lastName' />
                                </div>
                            </div>
                            <div className='formRow'>
                                <div className='formColumn'>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id='email'/>
                                </div>
                            </div>
                             <div className='formRow'>
                                <div className='formColumn'>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id='username'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {showVerifyCard && <VerifyCard />}
        </section>
    )
}