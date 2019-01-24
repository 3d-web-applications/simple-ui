import './overlay-screen.css';

import React from 'react';
import PropTypes from 'prop-types';

export const OverlayScreen = ({ closeOverlay, backToMain, vocabulary }) => (
  <div
      className="overlay-screen unselectable-text"
    >
    <div className="overlay-screen-button-group">
      <div
        className="overlay-screen-button"
        onClick={closeOverlay}
      >
        {vocabulary.options_btn_resume}
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
      >
        {vocabulary.options_btn_save}
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
      >
        {vocabulary.options_btn_load}
      </div>
      <div
        className="overlay-screen-button inactive"
        onClick={() => {}}
      >
        {vocabulary.options_btn_options}
      </div>
      <div
        className="overlay-screen-button"
        onClick={backToMain}
      >
        {vocabulary.options_btn_back}
      </div>
    </div>
  </div>
);

OverlayScreen.propTypes = {
  closeOverlay: PropTypes.func.isRequired,
  backToMain: PropTypes.func.isRequired,
  vocabulary: PropTypes.object.isRequired,
};
