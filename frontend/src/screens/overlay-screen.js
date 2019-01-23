import './overlay-screen.css';

import React from 'react';

export const OverlayScreen = () => {
  return <div className="overlay-screen">
    <div className="overlay-screen-button-group">
      <div className="overlay-screen-button">Resume to Game</div>
      <div className="overlay-screen-button">Save game</div>
      <div className="overlay-screen-button">Load game</div>
      <div className="overlay-screen-button">Options</div>
      <div className="overlay-screen-button">Back to Main</div>
    </div>
  </div>;
};