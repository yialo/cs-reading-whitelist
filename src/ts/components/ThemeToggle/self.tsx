import React from 'react';
import classNames from 'classnames';

import { Button } from 'ts/components/Button';

import style from './style.scss';

interface IProps {
  className?: string;
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<IProps> = ({ className, isDark, onToggle }) => {
  return (
    <Button
      className={classNames(style.root, className)}
      aria-label={`Перейти к ${isDark ? 'светлой' : 'тёмной'} теме`}
      onClick={onToggle}
    >
      {`Go ${isDark ? 'light' : 'dark'}`}
    </Button>
  );
};

ThemeToggle.defaultProps = {
  className: '',
};
