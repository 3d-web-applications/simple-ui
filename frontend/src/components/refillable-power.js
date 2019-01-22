import React from 'react';
import classNames from 'classnames';

import { PowerIcon } from '../components-svg/power-icon';
import { calcFillingLevel } from '../util/calc-filling-level';

export const RefillablePower = () => {
  const classnames = classNames({
    "power-icon-foreground": true,
  });
  return <div>
    <div className="icon-container power">
      <PowerIcon classnames={classNames({"power-icon-background": true})}/>
    </div>
    <div className="icon-container power" >
      <PowerIcon classnames={classnames} style={calcFillingLevel(0.2)} />
    </div>
  </div>
};
