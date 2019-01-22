import React from 'react';

import { RechargeableBattery } from './rechargeable-battery2';
import { CogwheelIcon } from '../components-svg/cogwheel-icon';
import { RefillablePower } from './refillable-power';
import { RadioButtonBlank } from '../components-svg/radio-button-blank-icon';
import { MinusIcon } from '../components-svg/minus-icon';
import { AbilityContainer } from './ability-container';

const IngameUi = () => {
    return (
        <div className="ingame-ui">

          <div className="radio-button-blank rb-1">
            <RadioButtonBlank />
          </div>
          <div className="radio-button-blank rb-2">
            <RadioButtonBlank />
          </div>
          <div className="radio-button-blank rb-3">
            <RadioButtonBlank />
          </div>
          <div className="icon-container m1">
            <MinusIcon />
          </div>
          <div className="icon-container m2">
            <MinusIcon />
          </div>
          <div className="icon-container m3">
            <MinusIcon />
          </div>

          <div className="icon-container cogwheel">
            <CogwheelIcon />
          </div>

          <RefillablePower />
          <div className="info info1">Schock Absorption: normal</div>
          <div className="info info2">System Cooling: normal</div>
          <div className="info info3">Operating System: normal</div>
          <RechargeableBattery />
          <AbilityContainer />
      </div>
    );
}

export { IngameUi };