import PropTypes from 'prop-types';
import React from 'react';

function ThemeToggle(props) {
  const {
    isDark,
    onToggle,
  } = props;

  return (
    <button
      aria-label={`Перейти к ${isDark ? 'светлой' : 'тёмной'} теме`}
      className="s_button page__theme-toggle"
      type="button"
      onClick={onToggle}
    >
      {`Go ${isDark ? 'light' : 'dark'}`}
    </button>
  );
}

ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ThemeToggle;
