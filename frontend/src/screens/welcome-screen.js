import './welcome-screen.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Intro } from '../data/screen-index';
import * as url from '../images/background-image - Kopie4.png';

const WelcomeScreen = ({ setPageIndex, vocabulary }) => (
  <div className="welcome-screen">
    <div className="row-100" onClick={() => setPageIndex(Intro)}>
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
);

WelcomeScreen.propTypes = {
  setPageIndex: PropTypes.func.isRequired,
  vocabulary: PropTypes.object.isRequired,
};


export { WelcomeScreen };
