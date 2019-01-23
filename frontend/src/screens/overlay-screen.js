import './overlay-screen.css';

import React from 'react';

import { hideContentMenu } from '../util/hide-context-menu';

export const OverlayScreen = ({closeOverlay, backToMain}) => {
  return <div
      className="overlay-screen unselectable-text"
      onContextMenu={hideContentMenu}
    >
    <div className="overlay-screen-button-group">
      <div
        className="overlay-screen-button"
        onClick={closeOverlay}
      >
        Resume to Game
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
      >
        Save game
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
      >
        Load game
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
      >
        Options
      </div>
      <div
        className="overlay-screen-button"
        onClick={backToMain}
      >
        Back to Main
      </div>
    </div>
  </div>;
};