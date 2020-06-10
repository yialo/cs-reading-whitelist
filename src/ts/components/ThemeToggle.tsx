import React from 'react';

interface IProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: IProps): React.ReactNode {
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
