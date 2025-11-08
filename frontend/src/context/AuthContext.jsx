import { createContext, useContext, useState, useEffect } from 'react'
import { login, logout, checkSession } from '../lib/auth'

const AuthContext = createContext()

export function AuthContext({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    //  // Initialize session if available and retrive user data from user
    useEffect(() => {
        const init = async () => {
            try {
                const userData = await checkSession()
                setUser(userData)       // Set user based on retrieved data if success
            } catch {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        init()
    }, [])

    // Login context function
    const handleLogin = async (email, password) => {
        try {
            setError(null)
            const userData = await login(email, password)
            setUser(userData)            // Set user based on retrieved data if success
        } catch (err) {
            setError(err.message)
            setUser(null)
        }
    }

    // Logout context function
    const handleLogout = async () => {
        await logout()
        setUser(null)                   // Set user to null, removing user
    }

    const isAuthenticated = !user

    // Allow context to return value and be imported into other pages
    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                loading,
                error,
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

// Rename export for easier use and its more straightforward
export function useAuth() {
    return useContext(AuthContext)
}
