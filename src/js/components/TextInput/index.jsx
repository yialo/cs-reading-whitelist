import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function TextInput(props) {
  const {
    className,
    inputMode,
    legend,
    onChange,
    value,
  } = props;
  return (
    <label
      className={classNames('text-input', !!className && className)}
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
  className: '',
};

TextInput.propTypes = {
  className: PropTypes.string,
  inputMode: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
