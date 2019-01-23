import React from 'react';
import Progress from 'react-progressbar';
import Typing from 'react-typing-animation';

import './loading-screen.css';

const data = [
  "- 52°31'04.5\"N 13°24'20.1\"E",
  "- Berlin, Germany",
  "- Population: 0",
  "- Productivity: 0",
  "- Growth Rate: 0",
  "- Intact Buildings: 1421",
  "- Remaining Resources: ~6.0 million"
];

const style = {
  width: "150px",
  height: "150px",
  "line-height": 0,
  "font-size": "12px",
}

 const array = [];

  data.forEach((text) => {
    array.push(<div key={array.length}>
        <p>{text}</p>
        <Typing.Delay ms={1000} />
      </div>
    );
  });

const createTypingField = (style) => {
  return <div>
    <Typing speed={30} style={style}>
      {array}
    </Typing>
  </div>
};

const LoadingScreen = ({onClick}) => {
  return <div className="LS" onClick={() => onClick()}>
    <div className="LS-typing-area">
      {createTypingField(style)}
    </div>
    <div className="LS-title">
        <h1>
          {'Scanning: '}
          <span className="normal">
            Europe
          </span>
        </h1>
        <div className="progress-container">
          <Progress completed={100} />
        </div>
        <p className="pulsate">
          Press any key to continue...
        </p>
      </div>
  </div>
};

export { LoadingScreen };
