import React from 'react';
import classNames from 'classnames';

import { MainButton } from 'ts/common/c_main-button';
import { useHasDarkTheme, useThemeToggle } from 'ts/common/theme';
import { TClassNameable } from 'ts/types';

import style from './style.scss';

export const ThemeToggle: React.FC<TClassNameable> = ({ className }) => {
  const hasDarkTheme = useHasDarkTheme();
  const toggleTheme = useThemeToggle();

  return (
    <MainButton
      className={classNames(style.root, className)}
      aria-label={`Перейти к ${hasDarkTheme ? 'светлой' : 'тёмной'} теме`}
      onClick={toggleTheme}
    >
      {`Go ${hasDarkTheme ? 'light' : 'dark'}`}
    </MainButton>
  );
};
