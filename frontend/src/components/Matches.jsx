// This file calls all match info needed for display
import { useEffect, useState } from 'react'
import MatchCard from './MatchBox'
import API_URL from '../lib/api'

export default function Matches() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMatches = async () => {
        try {
            const res = await fetch(`${API_URL}/matches`, {
                method: "GET",
                headers: { "Accept": "application/json" },
                credentials: "include"
            });
            if (!res.ok) throw new Error("Failed to load matches");

            const data = await res.json();
            setMatches(data);
        } catch (e) {
            console.error("Error Loading Matches: ", e);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchMatches();
    }, []);

    if (loading) return <p>Loading matches...</p>;

    return (
        <div className="matchesList">
            {matches.map(match => (
                <MatchCard
                key={match.id}
                matchLink={`/matches/${match.id}`}
                team1={match.team1}
                team2={match.team2}
                score={`${match.score1}-${match.score2}`}
                date={match.match_date}
                time={match.match_time}
            />
            ))}
        </div>
    );
}