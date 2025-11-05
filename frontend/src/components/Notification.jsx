import { useEffect, useState } from 'react'
import cable from '../lib/cable.js'
import API_URL from '../lib/api.js'

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch any existing notifications

    // Subscribe to action cable after fetch

    // Mark as read function

    // Return Notification component for use on page
}