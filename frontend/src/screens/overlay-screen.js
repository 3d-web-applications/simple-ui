import './overlay-screen.css';

import React from 'react';

export const OverlayScreen = () => {
  return <div className="ingame-screen-overlay">
    <div>
      <div>Resume to Game</div>
      <div>Save game</div>
      <div>Load game</div>
      <div>Options</div>
      <div>Back to Main</div>
    </div>
  </div>;
};