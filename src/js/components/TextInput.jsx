import PropTypes from 'prop-types';
import React from 'react';

function TextInput(props) {
  return (
    <label
      className={['text-input'].concat(props.classNames || []).join(' ')}
      aria-label={props.legend}
    >
      <input className="s_input text-input__field" type={props.type} />
    </label>
  );
}

TextInput.propTypes = {
  classNames: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  legend: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
