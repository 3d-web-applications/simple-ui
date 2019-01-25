import './main-menu.css';

import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup } from '../components/button-group';
import { closeApplication } from '../util/close-application';
import { Load, Option } from '../data/screen-index';
import * as url from '../images/background-image - Kopie4.png';

const MainMenuScreen = ({
  setPageIndex, vocabulary,
}) => {
  const buttons = [
    {
      label: vocabulary.main_btn_new,
      classes: 'main-menu-btn',
      onClick: () => setPageIndex(Load),
    },
    {
      label: vocabulary.main_btn_load,
      classes: `main-menu-btn ${(localStorage) ? '' : 'disabled'}`,
      onClick: () => {},
    },
    {
      label: vocabulary.main_btn_options,
      classes: 'main-menu-btn',
      onClick: () => setPageIndex(Option),
    },
    {
      label: vocabulary.main_btn_quit,
      classes: 'main-menu-btn',
      onClick: closeApplication,
    },
  ];

  return <div className="main-menu">
    <div className="column">
      <img
        className="cover-image non-draggable-image"
        src={url.default}
        alt={vocabulary.main_img_alt}
      />
    </div>
    <div className="center">
      <ButtonGroup buttons={buttons} />
    </div>
  </div>;
};

MainMenuScreen.defaultProps = {
  startNewGame: () => {},
  resumeLastGame: () => {},
  enterOptionsMenu: () => {},
};

MainMenuScreen.propTypes = {
  setPageIndex: PropTypes.func.isRequired,
  vocabulary: PropTypes.object.isRequired,
};

export { MainMenuScreen };
