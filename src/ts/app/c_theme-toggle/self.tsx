import React from 'react';
import classNames from 'classnames';

import { MainButton } from 'common/main-button';

import style from './style.scss';

interface IProps {
  className?: string;
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<IProps> = ({ className, isDark, onToggle }) => {
  return (
    <MainButton
      className={classNames(style.root, className)}
      aria-label={`Перейти к ${isDark ? 'светлой' : 'тёмной'} теме`}
      onClick={onToggle}
    >
      {`Go ${isDark ? 'light' : 'dark'}`}
    </MainButton>
  );
};
