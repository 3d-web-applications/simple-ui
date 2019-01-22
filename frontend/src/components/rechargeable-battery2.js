import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BatteryIcon } from '../components-svg/battery2-icon';
import { calcFillingLevel } from '../util/calc-filling-level';

export const RechargeableBattery = ({progress}) => {
    const classnames = classNames({
    "battery-icon-foreground": true,
  });
  return <div>
    <div className="icon-container battery">
      <BatteryIcon classnames={classNames({"battery-icon-background": true})}/>
    </div>
    <div className="icon-container battery" >
      <BatteryIcon classnames={classnames} style={calcFillingLevel(0.2)} />
    </div>
  </div>
};

RechargeableBattery.propTypes = {
  progress: PropTypes.number.isRequired,
};
