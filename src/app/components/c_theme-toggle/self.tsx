import * as React from 'react';
import cn from 'classnames';

import { MainButton } from '@/components/c_main-button';
import { useHasDarkTheme, useThemeToggle } from '@/components/theme';
import { TClassNameable } from '@/types';

import style from './style.scss';

export const ThemeToggle: React.FC<TClassNameable> = ({ className }) => {
  const hasDarkTheme = useHasDarkTheme();
  const toggleTheme = useThemeToggle();

  return (
    <MainButton
      className={cn(style.root, className)}
      aria-label={`Перейти к ${hasDarkTheme ? 'светлой' : 'тёмной'} теме`}
      onClick={toggleTheme}
    >
      {`Go ${hasDarkTheme ? 'light' : 'dark'}`}
    </MainButton>
  );
};
