import { Link } from 'react-router-dom';
import '../styles/components/MatchBox.css';

import place_holder from '../assets/placeHolder.png';


export default function PlayerCard({ children, onClose }) {
  return (   
    <div className="overlay" onClick={onClose}>
        <div
        className="content"
        onClick={(e) => e.stopPropagation()}> 
            <button className="close" onClick={onClose}>
            ✕
            </button>
            {children}
      </div>
    </div>

  );
}
