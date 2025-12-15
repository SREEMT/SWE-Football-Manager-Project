import { Link } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";

import '../styles/Settings.css'


import '../styles/Settings.css'
import SettingsHeader from '../components/SettingsHeader';
import ProfileChange from '../components/ProfileChange';
import PasswordChange from '../components/PasswordChange';
import { useState } from 'react';
import NotificationChange from '../components/NotificationChange';
import DeleteProfile from '../components/DeleteProfile';

const PANELS = {
    PROFILE: "PROFILE",
    PASSWORD: "PASSOWRD",
    NOTIFICATION: "NOTIFICATION",
    DELETE: "DELETE"
}

export default function Settings() {
    const [activePanel, setActivePanel] = useState(PANELS.PROFILE);

    const renderPanel = () => {
        switch (activePanel) {
            case PANELS.PROFILE:
                return <ProfileChange />
            case PANELS.PASSWORD:
                return <PasswordChange />
            case PANELS.NOTIFICATION:
                return <NotificationChange />
            case PANELS.DELETE:
                return <DeleteProfile />
            default:
                break;
        }
    }


    return (
        <section className='settings'>
            <div className="settingsContainer">
                <SettingsHeader />
                <h1>Settings</h1>
                <div className="settingsContentWrapper">
                    <aside className='settingsNav'>
                        <ul>
                            <li><button className='btn-link' onClick={() => setActivePanel(PANELS.PROFILE)}>Profile change</button></li>
                            <li><button className='btn-link' onClick={() => setActivePanel(PANELS.PASSWORD)}>Password change</button></li>
                            <li><button className='btn-link' onClick={() => setActivePanel(PANELS.NOTIFICATION)}>Notification change</button></li>
                            <li><button className='btn-link' onClick={() => setActivePanel(PANELS.DELETE)}>Delete profile</button></li>
                        </ul>
                    </aside>
                    {renderPanel()}
                </div>
            </div>
        </section>
    )
}