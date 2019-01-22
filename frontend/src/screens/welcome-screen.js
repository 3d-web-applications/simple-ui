import './welcome-screen.css';

import React from 'react';

import * as url from '../images/background-image - Kopie4.png';

const WelcomeScreen = ({onClick}) => {
  return <div className="welcome-screen">
    <div className="row-100" onClick={() => onClick()}>
      <div className="column">
        <div className="title">
          <h1>Left Behind</h1>
          <p className="pulsate">Press any key to continue...</p>
        </div>
      </div>
      <div className="column">
        <img
          className="cover-image"
          src={url.default}
          alt="The main character is looking into the air and cannot believe that he was left behind"
        />
      </div>
    </div>
  </div>
};

export { WelcomeScreen };
