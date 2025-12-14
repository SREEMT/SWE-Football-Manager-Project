import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth()

    // Loads protected page but routes user to login page if not successful
    if (loading) return <p>Loading..</p>
    if (!isAuthenticated) return <Navigate to="/login" replace />

    return children
}