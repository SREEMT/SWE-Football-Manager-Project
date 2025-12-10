import { Link } from 'react-router-dom';
import '../styles/components/PlayerBox.css';

import place_holder from '../assets/placeHolder.png';

export default function PlayerBox({
    name = "John Doe",
    position = 'default',
    number = 0,
    goals = 0,
    assists = 0}
){

  return(
    <>
    <div className='playerOverlay'>
      <p>{name}   {position}    {goals}     {assists}</p>
    </div>
    </>
  );
}