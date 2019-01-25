import 'rc-slider/assets/index.css';
import './options-menu.css';

import React from 'react';
import Slider, { Range } from 'rc-slider';

import { ButtonGroup } from '../components/button-group';

export const OptionsMenu = () => {
  const buttons = [];
  const wrapperStyle = { width: 400, margin: 50 };
  return (
    <div className="options-menu" style={wrapperStyle}>
      <ButtonGroup buttons={buttons} min={20} max={55} defaultValue={25}/>
      <Slider />
      <Range />
    </div>
  );
};
