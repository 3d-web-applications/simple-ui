import React from 'react';
import PropTypes from 'prop-types';

export const MouseIcon = ({customClass}) => {
  return <svg
      className="svg"
      viewBox="0 0 24 24"
    >
    <path className={customClass}
      fill="#000000"
      d="M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15A8,8 0 0,0 12,23A8,8 0 0,0 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z"
    />
  </svg>
};

MouseIcon.propTypes = {
  customClass: PropTypes.string.isRequired,
};