import React from 'react';

interface IProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<IProps> = ({ isDark, onToggle }) => {
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
};

export default ThemeToggle;
