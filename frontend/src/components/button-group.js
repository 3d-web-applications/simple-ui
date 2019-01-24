import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './button';

export const ButtonGroup = ({ buttons }) => {
  const array = [];
  buttons.forEach((button) => {
    array.push(
      <Button
        classnames={button.classes}
        onClick={button.onClick}
        label={button.label}
        key={array.length}
      />,
    );
  });

  return <div>{array}</div>;
};

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
};
