import './overlay-screen.css';

import React from 'react';

export const OverlayScreen = ({ closeOverlay, backToMain, vocabulary }) => {
  return <div
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
  </div>;
};