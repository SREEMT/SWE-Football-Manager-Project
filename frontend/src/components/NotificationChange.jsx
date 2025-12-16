import { useState } from "react";
import { PiToggleLeftBold, PiToggleRightBold } from "react-icons/pi";
import "../styles/components/NotificationChange.css"

const items = [
    { key: "inbox", label: "Inbox" },
    { key: "post", label: "Post" },
    { key: "liveMatches", label: "Live Matches" },
    { key: "likesComments", label: "Likes and Comments" },
]

function Toggle({ checked, onToggle }) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={onToggle}
            className="text-3xl focus:outline-none toggle-button"
        >
            {checked ? <PiToggleRightBold size={27}/> : <PiToggleLeftBold size={27}/> }
        </button>
    )
}

export default function NotificationChange() {
    const [prefs, setPrefs] = useState({
        inbox: false,
        post: true,
        liveMatches: true,
        likesComments: true
    })
    return (
        <div className='settingsContent'>
            <h2>Notification change</h2>
            <div className="notifications-content">
                {items.map((item) => (
                    <div key={item.key} className="notification-item">
                        <Toggle
                            checked={prefs[item.key]}
                            onToggle={() => setPrefs((prev) => ({
                                ...prev,
                                [item.key]: !prev[item.key]
                            }))
                            }
                        />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}