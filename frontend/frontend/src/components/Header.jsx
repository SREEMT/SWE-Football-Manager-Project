import { Link, useLocation } from "react-router-dom";
import { MdInbox } from "react-icons/md";
import "../styles/components/Header.css";
import { useEffect, useState } from "react";

export default function Header() {
    const location = useLocation();
    const [isLogin, setLogin] = useState(true); //change it to true to show the nav and buttons

    useEffect(() => {
        if(location.pathname == "/login") {
            setLogin(false);
        } else {
            setLogin(true);
        }
    }, [isLogin])

    return (
        <header className={`${isLogin ? '' : 'header-login'}`}>
            <div className={`${isLogin ? 'container' : 'container-fluid'}`}>
                <div className="header">
                    <span className="logo">Keeper</span>
                    {
                        isLogin ? <>
                            <nav>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">Calendar</Link></li>
                                    <li><Link to="/">Team</Link></li>
                                    <li><Link to="/brackets">Bracket</Link></li>
                                </ul>
                            </nav>
                            <ul className="header-buttons">
                                <li><MdInbox /></li>
                                <li><Link to="/login">Sign in</Link></li>
                                <li><button className="btn-primary">Join Keeper</button></li>
                            </ul>
                        </>
                            :
                            <div className="login-text">
                                <p>please login..</p>
                            </div>
                    }


                </div>
            </div>
        </header>
    )
}