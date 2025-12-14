import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdInbox } from "react-icons/md";
import "../styles/components/Header.css";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth() || {};
    const [isLoginPage, setIsLoginPage] = useState(false);
    const [isSignupPage, setIsSignupPage] = useState(false);

    useEffect(() => {
        setIsLoginPage(location.pathname === "/login");
        setIsSignupPage(location.pathname === "/signup")
    }, [location.pathname]);

    const handleLogout = async () => {
        if (logout){
            await logout();
        }
        navigate("/", {replace: true});
    };

    return (
        <header className={isLoginPage ? 'header-login' : ""}>
            <div className={isLoginPage ? 'container-fluid' : 'container'}>
                <div className="header">
                    <span className="logo">Keeper</span>
                    {!isLoginPage && ( 
                        <>
                            <nav>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">Calendar</Link></li>
                                    <li><Link to="/">Team</Link></li>
                                    <li><Link to="/brackets">Bracket</Link></li>
                                    <li><Link to="/matches">Matches</Link></li>
                                    {isAuthenticated && (
                                    <li>
                                        <Link to="/account">
                                            Account
                                        </Link>
                                    </li>
                                )}
                                </ul>
                            </nav>

                            <ul className="header-buttons">
                                
                                {isAuthenticated && (
                                    <li>
                                        <Link to="/inbox">
                                            <MdInbox />
                                        </Link>
                                    </li>
                                )}

                                {!isAuthenticated && (
                                    <li>
                                        <Link to="/login">
                                            Sign in
                                        </Link>
                                    </li>
                                )}

                                {!isAuthenticated && (
                                    <li><button className="btn-primary">Join Keeper</button></li>
                                )}
                                
                                {isAuthenticated && (
                                    <li>
                                        <button className="btn-primary" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </>
                    )}
                    {isLoginPage && (
                        <div ClassName="login-text">
                            <p>Please login..</p>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}