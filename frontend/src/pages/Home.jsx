// Test home page tied to root
import { Component, useState } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import  Navbar  from '../components/Navbar'  

import place_holder from '../assets/placeHolder.png';
import web_logo from '../assets/WebLogo.png';
import Post from '../components/PostBox';
import MatchCard from '../components/MatchBox';

import SignUp from "./SignUp";

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
        <>
        <header><Navbar/></header>
        <main className="home-page">
            <img src={web_logo}/>
            <h1>Welcome to the Home Page</h1>
            <p>This is a placeholder to test page routing</p>

            {/*Link list*/}
            <ul className="menudropdown">
                <li className="item"><Link to="/" style={{color: "#ffffff"}}><nav>Home</nav></Link></li>
                <li className="item"><Link to="/calendar" style={{color: "#ffffff"}}><nav>Calendar</nav></Link></li>
                <li className="item"><Link to="/profile" style={{color: "#ffffff"}}><nav>Profile</nav></Link></li>
                <li className="item"><Link to="/sign-up" style={{color: "#ffffff"}}><nav>Sign Up</nav></Link></li>
                <li className="item"><Link to="/playerprofile" style={{color: "#ffffff"}}><nav>PlayerProfile</nav></Link></li>
            </ul>

            {/*Matches*/}
            <h1>Ongoing Matches</h1>
            <MatchCard/>

            {/*Posts*/}
            <Post/>

            <SignUp/>



        </main>
        </>
    )
}