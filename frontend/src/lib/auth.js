import API_URL from './api'

// Login function taken & slightly modified from the Login.jsx
export async function login(email, password) {
    const response = await fetch(`${API_URL}/session`, {
        method: 'POST',
        headers: { 'Content-Type': `application/json`, },
        credentials: `include`,
        body: JSON.stringify({
            email_address: email,
            password: password,
        }),
    })

    if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Login failed')
    }

    return response.json()
}

// Log Out function
export async function logout() {
    const response = await fetch(`${API_URL}/session`, {
        method: `DELETE`,
        credentials: `include`,
    })
    return response.ok
}

// Retrieve user session & data
export async function checkSession() {
    const response = await fetch(`${API_URL}/sessin`, {
        method: `GET`,
        credentials: `include`,
    })
    if (!response.ok) {
        return null
    }
    return response.json()          // USer data retrieval
}