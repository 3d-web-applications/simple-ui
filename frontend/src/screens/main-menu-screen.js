import './main-menu.css';

import React from 'react'; 
import PropTypes from 'prop-types';

import { closeApplication } from '../util/close-application';
import * as url from '../images/background-image - Kopie4.png';

const MainMenuScreen = ({startNewGame, resumeLastGame, enterOptionsMenu}) => {
  return <div className="main-menu">
  <div className="column">
        <img
          className="cover-image non-draggable-image"
          src={url.default}
          alt="The main character is looking into the air and cannot believe that he was left behind"
        />
      </div>
    <div className="center">

      <div
        className="main-menu-btn"
        onClick={() => startNewGame()}
      >
      New Game
      </div>

      <div
        className="main-menu-btn disabled"
        onClick={() => resumeLastGame()}
      >
      Resume
      </div>

      <div
        className="main-menu-btn disabled"
        onClick={() => enterOptionsMenu()}
      >
      Options
      </div>

      <div
        className="main-menu-btn"
        onClick={() => closeApplication()}
      >
      Quit
      </div>

    </div>
  </div>
};

MainMenuScreen.defaultProps = {
  startNewGame: () => {},
  resumeLastGame: () => {},
  enterOptionsMenu: () => {},
}

MainMenuScreen.propTypes = {
  startNewGame: PropTypes.func.isRequired,
  resumeLastGame: PropTypes.func.isRequired,
  enterOptionsMenu: PropTypes.func.isRequired,
};

export { MainMenuScreen };
