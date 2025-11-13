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

    // Placeholder card genearted by AI
    // Will be replaced or highly modified to be fully functional
    // FOR TESTING
    return (
    <div className="card">
      <h3>Delete Account</h3>

      {!verified ? (
        <form onSubmit={handleVerify}>
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
      )
    )
    