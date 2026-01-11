import { useState } from 'react'
import Notification from '../components/Notification.jsx'
import { IoMdSearch } from "react-icons/io";
import '../styles/Inbox.css';

export default function Inbox() {

    return (
        <div className='inbox-wrapper'>
            <div className="container">
                <div className="inbox-header">
                    <h1>Inbox</h1>
                    <button className='btn btn-primary'>New message</button>
                </div>
                <div className="inbox">
                    <div className="inbox-left">
                        <div className="toggle-buttons">
                            <button className='btn btn-push'>Received</button>
                            <button className='btn btn-push btn-push-secondary'>Sent</button>
                        </div>
                        <div className="inbox-messages">
                            <div className="inbox-messages-search">
                                <IoMdSearch />
                                <input type="text" />
                            </div>
                            <div className="inbox-messages-list">

                            </div>
                        </div>
                    </div>
                    <div className="inbox-right">
                        <div className="inbox-card">

                        </div>
                    </div>
                </div>
            </div>
            {/* <Notification /> */}
        </div>
    )
}