import React from 'react';

import { KeyboardIcon }from '../components-svg/keyboard-icon';
import { MouseIcon } from '../components-svg/mouse-icon';
import { ControllerIcon } from '../components-svg/controller-icon';
import { CellphoneIcon } from '../components-svg/cellphone-icon';

const InputScreen = () => {
  return <div className="input-screen">
    <div className="row">
      <div className="column">
      <KeyboardIcon customClass="keyboard-icon" />
      <MouseIcon customClass="mouse-icon" />
      </div>
    </div>
    <div className="row">
      <div className="column">
        <ControllerIcon customClass="controller-icon" />
      </div>
    </div>
    <div className="row">
      <div className="column">
        <CellphoneIcon customClass="cellphone-icon" />
      </div>
    </div>
  </div>
};

export { InputScreen };
