import "../styles/components/PasswordChange.css";

export default function PasswordChange() {
    return (
        <div className='settingsContent'>
            <h2>Password change</h2>

            <form className='profile-form password-form'>
                <div className='formGroup'>
                    <div className='formRow'>
                        <div className='formColumn'>
                            <label htmlFor="password">Current Password</label>
                            <input type="password" id='password' />
                        </div>
                    </div>
                    <div className='formRow'>
                        <div className='formColumn'>
                            <label htmlFor="newpassword">New Password</label>
                            <input type="password" id='newpassword' />
                        </div>
                    </div>
                    <div className='formRow'>
                        <div className='formColumn'>
                            <label htmlFor="repeatpassword">Repeat Password</label>
                            <input type="password" id='repeatpassword' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}