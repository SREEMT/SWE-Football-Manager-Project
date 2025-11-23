import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import API_URL from '../lib/api.js'
    

const VerifyCard = () => {
  const { user, isAuthenticated } = useAuth
  const [password, setPassword] = useState('')
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  // Verifies password
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

            return response.ok
        } catch (err) {
            setError(err.message)
            return false
        }
    }


  // Deletes account
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

            return response.ok
        } catch (err) {
            setError(err.message)
            return false
        }
    }



  const verifyDelete = async (e) => {
    e.preventDefault()
    setLoading(true)

    const isVerified = await handleVerify(password)
    if (!isVerified) {
      setError("Incorrect Pass")
      setLoading(false)
      return
    }
    setVerified(true)
    const deleted = await handelDelete(password)

    if (deleted) {
      alert("Account deleted")
    } else {
      setError("Failed to delete")
    }

    setLoading(false)
  }


  // Placeholder card genearted by AI
  // Will be replaced or highly modified to be fully functional
  // FOR TESTING
  return (
  <div className="card">
    <h3>Delete Account</h3>
    {!verified && (
      <form onSubmit={verifyDelete}>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify Password'}
        </button>
      </form>
    )}
  </div>
  )
}

export default VerifyCard