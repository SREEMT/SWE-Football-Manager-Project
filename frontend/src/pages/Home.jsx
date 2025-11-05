// Test home page tied to root
import './Home.css'
import { Link } from 'react-router-dom'  

export default function Home() {
    return (
        <main className="home-page">
            <h1>Welcome to the Home Page</h1>
            <p>This is a placeholder to test page routing</p>

            {/*Link list*/}
            <ul className="menudropdown">
                <li className="item"> <nav><Link to="/login">Login</Link> </nav></li>
                <li className="item"><a href="#" target="_blank" style={{color: "#ffffffff"}}>Calendar</a></li>
                <li className="item"><a href="#" target="_blank" style={{color: "#ffffffff"}}>Profile</a></li>
            </ul>

            {/*Matches*/}
            <h1>Ongoing Matches</h1>
            <Link to={matchLink} className="matchBox">
                <div className="matchInfo">
                    <img src={team1_logo} alt={`${team1} Logo`} className="teamLogo" />
                    <span className="teamNames">{team1} vs {team2}</span>
                    <img src={team2_logo} alt={`${team2} Logo`} className="teamLogo" />
                    <p>{score}</p>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                </div>
                <button>Good</button>
                <button>Neutural</button>
                <button>Bad</button>
            </Link>

            {/*Posts*/}
            <div className="postBox">
                <h2>Title</h2>
                <img src={post_img} className="imgPic" />
                <button>Like</button>
                <button>Dislike</button>
            </div>




        </main>
    )
}