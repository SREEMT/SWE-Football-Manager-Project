import { RxAvatar } from "react-icons/rx";

export default function ProfileChange() {
    return (
        <div className='settingsContent'>
            <h2>Profile change</h2>
            <div className='profileImage'>
                <RxAvatar />
                <button className='btn-primary'>Change photo</button>
            </div>

            <form className='profile-form'>
                <div className='formGroup'>
                    <label htmlFor="bio">Bio</label>
                    <textarea id='bio'></textarea>
                </div>
                <div className='formGroup'>
                    <div className='formRow'>
                        <div className='formColumn'>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id='firstName' />
                        </div>
                        <div className='formColumn'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' />
                        </div>
                    </div>
                    <div className='formRow'>
                        <div className='formColumn'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' />
                        </div>
                    </div>
                    <div className='formRow'>
                        <div className='formColumn'>
                            <label htmlFor="username">Username</label>
                            <input type="text" id='username' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}