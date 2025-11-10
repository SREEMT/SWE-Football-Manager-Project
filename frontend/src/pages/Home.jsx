// Test home page tied to root
import { Component, useState } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'  

import place_holder from '../assets/placeHolder.png';
import web_logo from '../assets/WebLogo.png';

export default function Home() {
    const [matchLink,setMatchLink] = useState('');
    const [team1,setTeam1] = useState('Team 1');
    const [team2,setTeam2] = useState('Team 2');
    const [team1_logo,setTeam1Logo] = useState(place_holder);
    const [team2_logo,setTeam2Logo] = useState(place_holder);
    const [score,setScore] = useState('0-0');
    const [date,setDate] = useState('12/31/2025');
    const [time,setTime] = useState('99:99');
    const [post_img,setPostImg] = useState(place_holder);
    const [postCaption,setpostCaption] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

    return (
        <main className="home-page">
            <img src={web_logo}/>
            <h1>Welcome to the Home Page</h1>
            <p>This is a placeholder to test page routing</p>

            {/*Link list*/}
            <ul className="menudropdown">
                <li className="item"><Link to="/" style={{color: "#ffffff"}}>Home</Link></li>
                <li className="item"><Link to="/calendar" style={{color: "#ffffff"}}>Calendar</Link></li>
                <li className="item"><Link to="/profile" style={{color: "#ffffff"}}>Profile</Link></li>
            </ul>

            {/*Matches*/}
            <h1>Ongoing Matches</h1>
            <Link to={matchLink || '#'} className="matchBox">
                <div className="matchInfo">
                    <img src={team1_logo} alt={`${team1} Logo`} className="teamLogo" />
                    <span className="teamNames">{team1} vs {team2}</span>
                    <img src={team2_logo} alt={`${team2} Logo`} className="teamLogo" />
                    <p>{score}</p>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                </div>
                <div className="reactionButtons">
                    <button>Good</button>
                    <button>Neutral</button>
                    <button>Bad</button>
                </div>
            </Link>

            {/*Posts*/}
            <div className="postBox">
                <h2>Post Title</h2>
                <img src={post_img} className="imgPic" />
                <p>{postCaption}</p>
                <div className="likeButtons">
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>




        </main>
    )
}