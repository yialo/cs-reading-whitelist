import PropTypes from 'prop-types';
import React from 'react';

function TextInput(props) {
  const {
    classNames,
    inputMode,
    legend,
    onChange,
    value,
  } = props;
  return (
    <label
      className={['text-input'].concat(classNames).join(' ')}
      aria-label={legend}
    >
      <input
        className="s_input text-input__field"
        onChange={onChange}
        type="text"
        inputMode={inputMode}
        value={value}
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
  inputMode: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
