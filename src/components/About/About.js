import React from 'react'
import './about.css';

export default function About() {
  return (
    <div id="about">
      <div className="fixed">
          <div className="background"></div>
          <div className="background-2"></div>
          <div className="background-3"></div>
      </div>

        <h3 id="grid-header"><em>about</em></h3>
        <div>
            <p>Fine art producer based out of Boston, Massachusetts. Main focus on marble and fine wood sculpting, as well as metal and stone casting with more abstract pieces.</p>
            <img src={require("../../images/IMG_0538.JPG").default} alt="Profile" id="profile" />
        </div>
    </div>
  )
}
