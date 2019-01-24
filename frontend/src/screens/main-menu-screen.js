import './main-menu.css';

import React from 'react'; 
import PropTypes from 'prop-types';

import { closeApplication } from '../util/close-application';
import * as url from '../images/background-image - Kopie4.png';

const MainMenuScreen = (
  { startNewGame, resumeLastGame, enterOptionsMenu, vocabulary }
) => {
  const loadButtonClass = `main-menu-btn ${(localStorage) ? '' : 'disabled'}`;
  return <div className="main-menu">
  <div className="column">
        <img
          className="cover-image non-draggable-image"
          src={url.default}
          alt={vocabulary.main_img_alt}
        />
      </div>
    <div className="center">

      <div
        className="main-menu-btn"
        onClick={() => startNewGame()}
      >
      {vocabulary.main_btn_new}
      </div>

      <div
        className={loadButtonClass}
        onClick={() => resumeLastGame()}
      >
      {vocabulary.main_btn_load}
      </div>

      <div
        className="main-menu-btn disabled"
        onClick={() => enterOptionsMenu()}
      >
      {vocabulary.main_btn_options}
      </div>

      <div
        className="main-menu-btn"
        onClick={() => closeApplication()}
      >
      {vocabulary.main_btn_quit}
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
