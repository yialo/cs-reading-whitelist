import React from 'react';

interface IProps {
  className?: string;
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<IProps> = ({ className, isDark, onToggle }) => {
  return (
    <button
      aria-label={`Перейти к ${isDark ? 'светлой' : 'тёмной'} теме`}
      className={className}
      type="button"
      onClick={onToggle}
    >
      {`Go ${isDark ? 'light' : 'dark'}`}
    </button>
  );
};

ThemeToggle.defaultProps = {
  className: '',
};
