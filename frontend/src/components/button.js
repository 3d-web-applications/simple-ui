import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label, classnames, onClick }) => (
  <div
      className={classnames}
      onClick={onClick}
    >
    {label}
    </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  classnames: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
