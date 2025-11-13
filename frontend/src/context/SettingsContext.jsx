import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { API_URL } from '../lib/api.js'

const SettingsContext = createContext()

export function SettingsProvider({ children }) {
    const {user, isAuthenticated} = useAuth()
    const [error, setError] = useState(null)

    // Handles delete 
    const handelDelete = async (password) => {
        // verify user and auth
        if (!isAuthenticated || !user) {
            setError("Not Authenticated")
            return
        }

        // fetch delete user api route
        // Similar template to other fetches
        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'DELETE',
                headers: { 'Content-Type': `application/json`, },
                body: JSON.stringify({password}),
                credentials: `include`,
            })

            if (!response.ok) {
                throw new Error("Failed to delete")
            }
        } catch (err) {
            setError(err.message)
        }
    }

    // return value to be imported into necessary pages/components
    return (
        <SettingsContext.Provider
            value={{
                handelDelete,
                error,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
  return useContext(SettingsContext)
}