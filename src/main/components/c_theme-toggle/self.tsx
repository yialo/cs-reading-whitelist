import * as React from 'react';
import cn from 'clsx';

import { ButtonBase } from '@/components/c_button-base';
import { useHasDarkTheme, useThemeToggle } from '@/components/theme';
import { TClassNameable } from '@/types';

import style from './style.scss';

export const ThemeToggle: React.FC<TClassNameable> = ({ className }) => {
  const hasDarkTheme = useHasDarkTheme();
  const toggleTheme = useThemeToggle();

  return (
    <ButtonBase
      className={cn(style.root, className)}
      aria-label="Режим тёмной темы"
      aria-pressed={hasDarkTheme}
      onClick={toggleTheme}
    >
      {`Go ${hasDarkTheme ? 'light' : 'dark'}`}
    </ButtonBase>
  );
};
