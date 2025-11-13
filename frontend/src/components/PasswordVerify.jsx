import { useEffect, useState } from 'react'
import API_URL from '../lib/api.js'

const handleVerify = async (password) => {
        if (!isAuthenticated || !user) {
            setError("Not Authenticated")
            return
        }

        // fetch verify password api route
        try {
            const response = await fetch(`${API_URL}/password_verify`, {
                method: `POST`,
                headers: { 'Content-Type': 'application/json', },
                credentials: 'include',
                body: JSON.stringify({password}),
            })

            if (!response.ok) {
                throw new Error("Password Invalid, Try Again")
            }
        } catch (err) {
            setError(err.message)
        }
    }