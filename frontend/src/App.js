import './App.css';
import React from 'react';
import { RechargeableBattery } from './components/rechargeable-battery';
import { CropFreeIcon } from './components/crop-free-icon';
import { HelpCircleOutlineIcon } from './components/help-circle-outline-icon';
import { CogwheelIcon } from './components/cogwheel-icon';
import { PowerIcon } from './components/power-icon';

const temp1 = {
  position: "absolute",
  top: "2px",
  left: "-4px",
};

const temp2 = {
  position: "absolute",
  top: "2px",
  left: "10px",
};

const temp3 = {
  position: "absolute",
  top: "2px",
  left: "24px",
};

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <div style={temp1}><RechargeableBattery progress={100} /></div>
          <div style={temp2}><RechargeableBattery progress={70} /></div>
          <div style={temp3}><RechargeableBattery progress={0} /></div>
          <div className="icon-container crop-free">
            <CropFreeIcon />
          </div>
          <div className="icon-container help-circle-outline">
            <HelpCircleOutlineIcon />
          </div>
          <div className="icon-container cogwheel">
            <CogwheelIcon />
          </div>
          <div className="icon-container power">
            <PowerIcon />
          </div>
          <p>
            The UI is coming soon.
          </p>
        </header>
      </div>
    );
}

export default App;