import { RxAvatar } from "react-icons/rx";
import '../styles/Account.css'

export default function Account() {

    const handleLogout = (event) => {

    }

    return (
        <section className='account'>
            <div className="accountContainer">
                <h1>My Account</h1>
                <div className="accountContentWrapper">
                    <aside className='accountNav'>
                        <ul>
                            <li><a className='btn-link' href="/settings">Settings</a></li>
                            <li><a className='btn-link' href="#">Inbox</a></li>
                            <li><button className='btn-link' onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </aside>
                    <div className="accountContent">
                        <h2>Username</h2>
                        <RxAvatar />
                        <h3>User's name</h3>
                        <p><a href="mailto:users@email.com" className="account-email">users@email.com</a></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, non, molestiae, sequi eius inventore iste aperiam esse temporibus quam dolore iusto eligendi delectus aspernatur itaque nulla nam sunt ullam rerum?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}