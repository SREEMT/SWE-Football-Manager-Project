import '../styles/Profile.css'
import { Link} from 'react-router-dom'
import React, { useState } from "react";
import ProfilePic from "../images/profile-placeholder-image.png";

export default function Profile() {
    const [name, setName] = useState("Your Username");

    return (
        <>
        <EditableText value={name} onChange={setName} className="ProfileText"/>

          <div>
            <img src={ProfilePic} className="ProfilePicture" alt="GenericProfileLogo" caption="GenericProfileLogo"/>
          </div>

          <section className='profileButtons'>
            <button className='changephoto'>Change Photo</button>
            <button className='deleteaccount'>Delete Account</button>
            <button className='updatepassword'>Update Password</button>
            <button className='removephoto'>Remove Photo</button>
          </section>

<section>
     <p>Team: </p>
  <table>
    <thead>
      <tr>
        <th>Game_Played</th>
        <th>Goals</th>
        <th>Assist</th>
        <th>Clean sheets</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</section>
        </>
    );
}

// function for entering username text
 function EditableText({ value, onChange, className }) {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <input
      className={className} 
      value={value}
      autoFocus
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => setEditing(false)}
      onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
    />
  ) : (
    <span className={className} onClick={() => setEditing(true)}>{value}</span>
  );
}