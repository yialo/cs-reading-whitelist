import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  const { classNames, legend, onClick, type } = props;
  return (
    <button
      className={['s_button', 'button'].concat(classNames).join(' ')}
      type={type}
      onClick={onClick}
    >
      {legend}
    </button>
  );
}

Button.defaultProps = {
  classNames: [],
};

Button.propTypes = {
  classNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  legend: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
