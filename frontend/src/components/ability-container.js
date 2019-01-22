import React from 'react';

import { LightBulbIcon } from '../components-svg/light-bulb-icon';
import { PlusBoxIcon } from '../components-svg/plus-box-icon';
import { SecurityIcon } from '../components-svg/security-icon';
import { getStatus } from '../util/get-status';

export const AbilityContainer = ({abilities}) => {
  return <div className="ability-container">
    <LightBulbIcon customClass={`lightbulb-icon ${getStatus(true)}`} />
    <SecurityIcon customClass={`security-icon ${getStatus(true)}`} />
    <PlusBoxIcon customClass={`plus-box-icon ${getStatus(true)}`}  />
  </div>;
};

AbilityContainer.defaultProps = {
  abilities: {
    light: false,
    shield: false,
    heal: false,
  }
};
