import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  return (
    <button
      className={['s_button', 'button'].concat(props.classNames || []).join(' ')}
      type={props.type}
      onClick={props.onClick}
    >
      {props.legend}
    </button>
  );
}

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
