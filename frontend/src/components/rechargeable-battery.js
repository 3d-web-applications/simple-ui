import React from 'react';
import PropTypes from 'prop-types';
import Progress from 'react-progressbar';

import { BatteryIcon } from '../components-svg/battery-icon';

export const RechargeableBattery = ({ progress }) => (
  <div
    className="battery">
    <Progress
      className="battery-progress"
      completed={progress}
    />
    <BatteryIcon />
  </div>
);

RechargeableBattery.propTypes = {
  progress: PropTypes.number.isRequired,
};
