import PropTypes from 'prop-types';
import React from 'react';

function TextInput(props) {
  return (
    <label
      className={['text-input'].concat(props.classNames).join(' ')}
      aria-label={props.legend}
    >
      <input
        className="s_input text-input__field"
        onChange={props.onChange}
        type={props.type}
        value={props.value}
      />
    </label>
  );
}

TextInput.defaultProps = {
  classNames: [],
};

TextInput.propTypes = {
  classNames: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  onChange: PropTypes.func.isRequired,
  legend: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
