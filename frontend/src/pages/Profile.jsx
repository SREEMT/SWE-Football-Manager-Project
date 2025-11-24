import '../styles/Profile.css'
import { Link} from 'react-router-dom'
import React, { useState } from "react";
import place_holder from '../assets/placeHolder.png';
import PlayerCard from '../components/PlayerElement.jsx';
import PlayerBox from '../components/PlayerBox.jsx';

export default function Profile() {
    const [activeTab, setActiveTab] = useState("matches");
    const [team,setTeam1] = useState('Team Name');


    return (
        <>
            <h1>{team}</h1>

            <div className="tabBox">
                {/* Tab Navigation */}
                <div className="tabNav">
                    <button
                    className={activeTab === "matches" ? "active" : ""}
                    onClick={() => setActiveTab("matches")}
                    >
                        Teams
                    </button>

                    <button
                    className={activeTab === "players" ? "active" : ""}
                    onClick={() => setActiveTab("players")}>
                        Players
                    </button>

                </div>

                {/* Tab Content */}
                <div className="tabContent">
                    {activeTab === "matches" && <Matches />}
                    {activeTab === "players" && <Players />}
                </div>
            </div>
        </>
    );
}



// Example content components
function Matches() {
    {/*Put match links here */}
  return <div>List of Matches...</div>;
}

function Players() {
    const players = [
        { id: 1, name: "John Doe", position: "d1", number: 9, goals: 0, assists: 0},
        { id: 2, name: "John Doe2", position: "d2", number: 12, goals: 12, assists: 4},
        { id: 3, name: "John Doe3", position: "d3", number: 15, goals: 2, assists: 12}
    ];
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    return <div>
      <h3>Roster</h3>
      <ul className="playerList">
        {players.map((p) => (
          <>
          <li key={p.id} onClick={() => setSelectedPlayer(p)}>
            <PlayerBox name={p.name} position={p.position} goals={p.goals} assists={p.assists} />
          </li>
          <br /><br /></>
        ))}
      </ul>

      {/* Modal */}
      {selectedPlayer && (
        <PlayerCard onClose={() => setSelectedPlayer(null)}>
          <img src={place_holder} alt={`player`} className="playerPhoto" />
          <h2>{selectedPlayer.name}</h2>
          <p>Position: {selectedPlayer.position}</p>
          <p>Jersey #: {selectedPlayer.number}</p>
          <p>Goals: {selectedPlayer.goals}</p>
          <p>Assists: {selectedPlayer.assists}</p>
        </PlayerCard>
      )}

    </div>;
}
