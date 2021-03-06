import React from 'react';
import PropTypes from 'prop-types';

export const CellphoneIcon = ({ customClass }) => (
  <svg
      className="svg"
      viewBox="0 0 24 24"
    >
    <path className={customClass}
      fill="#000000"
      d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z"
    />
  </svg>
);

CellphoneIcon.propTypes = {
  customClass: PropTypes.string.isRequired,
};
