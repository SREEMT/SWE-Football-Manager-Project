import React from 'react'
import '../styles/index.css'

function Alert() {
  return (
    <div>
      <h2>Enter Your New Password</h2>

      <form>
        <div>
          <label>New Password: </label>
          <input type="password" placeholder="Enter new password" />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" placeholder="Confirm new password" />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      </div>
  )
}

export default Alert