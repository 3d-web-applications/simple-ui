import './plot-screen.css';

import React from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

const PlotScreen = ({ plot, onClick, vocabulary }) => {
  const array = [];

  plot.forEach((text) => {
    array.push(<div key={array.length}>
        <p>{text}</p>
        <Typing.Delay ms={1000} />
      </div>);
  });

  return <div
      className="plot-screen"
      onClick={() => onClick()
    }>
      <p className="skip pulsate">{vocabulary.intro_skip}</p>
      <div className="plot">
        <Typing speed={30}>
          {array}
        </Typing>
      </div>
    </div>;
};

PlotScreen.propTypes = {
  plot: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  vocabulary: PropTypes.object.isRequired,
};

export { PlotScreen };
