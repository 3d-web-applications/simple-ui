import React from 'react'; 

export const Button = ({label, classnames, onClick}) => (
  <div
      className={classnames}
      onClick={onClick}
    >
    {label}
    </div>
);
