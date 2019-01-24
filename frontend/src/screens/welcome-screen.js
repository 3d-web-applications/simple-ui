import './welcome-screen.css';

import React from 'react';

import * as url from '../images/background-image - Kopie4.png';

const WelcomeScreen = ({ onClick, vocabulary }) => {
  return <div className="welcome-screen">
    <div className="row-100" onClick={() => onClick()}>
      <div className="column">
        <div className="title">
          <h1>{vocabulary.welcome_title}</h1>
          <p className="pulsate">{vocabulary.welcome_skip}</p>
        </div>
      </div>
      <div className="column">
        <img
          className="cover-image non-draggable-image"
          src={url.default}
          alt={vocabulary.welcome_img_alt}
        />
      </div>
    </div>
  </div>
};

export { WelcomeScreen };
