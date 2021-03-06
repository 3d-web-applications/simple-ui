import React from 'react';
import PropTypes from 'prop-types';

export const SecurityIcon = ({ customClass }) => (
  <svg
      viewBox="0 0 24 24"
    >
    <path className={customClass}
      fill="#000000"
      d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z"
    />
  </svg>
);

SecurityIcon.propTypes = {
  customClass: PropTypes.string.isRequired,
};
