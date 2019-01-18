import React from 'react';
import classNames from 'classnames';

import { PowerIcon } from './power-icon';
import { calcFillingLevel } from '../util/calc-filling-level';

export const RefillablePower = () => {
  const classnames = classNames({
    "power-icon-foreground": true,
  });
  return <>
    <div className="icon-container power">
      <PowerIcon />
    </div>
    <div className="icon-container power" >
      <PowerIcon classnames={classnames} style={calcFillingLevel(0.2)} />
    </div>
  </>
};
