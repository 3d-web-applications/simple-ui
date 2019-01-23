import './ingame-screen.css';

import React, { useState } from 'react';

import { RechargeableBattery } from '../components/rechargeable-battery2';
import { CogwheelIcon } from '../components-svg/cogwheel-icon';
import { RefillablePower } from '../components/refillable-power';
import { RadioButtonBlank } from '../components-svg/radio-button-blank-icon';
import { MinusIcon } from '../components-svg/minus-icon';
import { AbilityContainer } from '../components/ability-container';
import { OverlayScreen } from './overlay-screen';

export const IngameUi = ({backToMain}) => {
    const [options, setOptions] = useState(false);
    const progress = 50;

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
            <CogwheelIcon onClick={() => setOptions(true)} />
          </div>

          <RefillablePower />
          <div className="info info1">Schock Absorption: normal</div>
          <div className="info info2">System Cooling: normal</div>
          <div className="info info3">Operating System: normal</div>
          <RechargeableBattery progress={progress} />
          <AbilityContainer />

          {options && <OverlayScreen
            closeOverlay={() => setOptions(false)}
            backToMain={backToMain}
          />}
      </div>
    );
}