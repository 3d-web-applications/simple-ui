import './overlay-screen.css';

import React from 'react';

export const OverlayScreen = () => {
  return <div className="overlay-screen unselectable">
    <div className="overlay-screen-button-group">
      <div
        className="overlay-screen-button"
        onClick={() => {}}
      >
        Resume to Game
      </div>
      <div
        className="overlay-screen-button"
        onClick={() => {}}
      >
        Save game
      </div>
      <div
        className="overlay-screen-button"
        onClick={() => {}}
      >
        Load game
      </div>
      <div
        className="overlay-screen-button"
        onClick={() => {}}
      >
        Options
      </div>
      <div
        className="overlay-screen-button"
        onClick={() => {}}
      >
        Back to Main
      </div>
    </div>
  </div>;
};