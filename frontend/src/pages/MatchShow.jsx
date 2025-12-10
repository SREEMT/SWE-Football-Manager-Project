import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_URL from '../lib/api';
import place_holder from '../assets/placeHolder.png';

export default function MatchShow() {
  const { id } = useParams();          // grabs :id from /matches/:id
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/matches/${id}`, {
        method: "GET",
        credentials: "include",
        headers: { "Accept": "application/json" }
    })
    .then(res => res.json())
    .then(data => setMatch(data))
    .catch(err => console.error('Match fetch error:', err));
  }, [id]);

  if (!match) return <p>Loading match...</p>;

  return (
    <div>
      <h1>{match.team1} vs {match.team2}</h1>
      <p>Score: {match.score1}-{match.score2}</p>
      <p>Date: {match.match_date}</p>
      <p>Time: {match.match_time}</p>
      <p>Location: {match.location}</p>
    </div>
  );
}
