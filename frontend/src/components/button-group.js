import React from 'react';

import { Button } from './button';

export const ButtonGroup = ({ buttons }) => {
  const array = [];
  buttons.forEach((button) => {
    array.push(
      <Button
        classnames={button.classes}
        onClick={button.onClick}
        label={button.label}
      />
    );
  });

  return <div>{array}</div>;
};
