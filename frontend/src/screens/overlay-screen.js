import './overlay-screen.css';

import React from 'react';

export const OverlayScreen = ({closeOverlay, backToMain}) => {
  const hideContentMenu = (event) => {
    event.preventDefault();
  }

  return <div
      className="overlay-screen unselectable-text"
      onContextMenu={hideContentMenu}
    >
    <div className="overlay-screen-button-group">
      <div
        className="overlay-screen-button"
        onClick={closeOverlay}
        onContextMenu={hideContentMenu}
      >
        Resume to Game
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
        onContextMenu={hideContentMenu}
      >
        Save game
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
        onContextMenu={hideContentMenu}
      >
        Load game
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
        onContextMenu={hideContentMenu}
      >
        Options
      </div>
      <div
        className="overlay-screen-button"
        onClick={backToMain}
        onContextMenu={hideContentMenu}
      >
        Back to Main
      </div>
    </div>
  </div>;
};