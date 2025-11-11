// Change button for logout into a link or change log in into a button for consistency.
// This will be decided later, I prefer button --SREEMT



import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
    const { isAuthenticated, logout, user } = useAuth()
    const location = useLocation()                          // grabs page location data
    const navigate = useNavigate()                          // Takes users to other pages

    console.log('Navbar auth state:', { isAuthenticated, user })                    // Debugging navbar


    if (location.pathname === '/login') return (
        <nav>
            <Link to="/">Home</Link>
        </nav>
    )

    // Force page to reload on logout
    const handleLogout = async () => {
        await logout()
        navigate('/', { replace: true})
    }

    // Nav bar that shows links based on authentication
    return (
         <nav>
            <Link to="/">Home</Link>

            { isAuthenticated && (
                <>
                { "|" }
                <Link to="/inbox">Inbox</Link> 
                </>
            )}

            { isAuthenticated && (
                <>
                { "|" }
                <Link to="/settings">Settings</Link>
                </>
            )}
                
            { !isAuthenticated && (
                <>
                { "|" }
                <Link to="login">Login</Link>                              
                </>
            )}

            { isAuthenticated && (
                <>
                { "|" }
                <button onClick={handleLogout}>Logout</button>
                </>
            )}
         </nav>
    )
}