import { useState } from 'react'
import Notification from '../components/Notification.jsx'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Inbox() {
    const { isAuthenticated, logout, user } = useAuth()

    if (!isAuthenticated) return <Navigate to="/" replace />

    return (
        <div>
            <Notification />
        </div>
    )}