import { Link } from 'react-router-dom';
import '../styles/components/MatchBox.css';

import place_holder from '../assets/placeHolder.png';

export default function MatchCard({
  matchLink = '#',
  team1 = 'Team 1',
  team2 = 'Team 2',
  team1Logo = place_holder,
  team2Logo = place_holder,
  score = '0-0',
  date = '12/31/2025',
  time = '99:99',
}) {
  return (
    <Link to={matchLink} className="matchBox">
      <div className="matchInfo">
        <img src={team1Logo} alt={`${team1} logo`} className="teamLogo" />
        <span className="teamNames">{team1} vs {team2}</span>
        <img src={team2Logo} alt={`${team2} logo`} className="teamLogo" />
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
  );
}
