import PropTypes from 'prop-types';
import React from 'react';

function TextInput(props) {
  const {
    classNames,
    legend,
    onChange,
    type,
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
        type={type}
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
  legend: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
