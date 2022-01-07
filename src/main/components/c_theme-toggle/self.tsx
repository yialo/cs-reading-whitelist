import * as React from 'react';
import cn from 'clsx';

import { MainButton } from '@/components/c_main-button';
import { useHasDarkTheme, useThemeToggle } from '@/components/theme';
import type { TClassNameable } from '@/types/common';

import style from './style.scss';

export const ThemeToggle: React.FC<TClassNameable> = ({ className }) => {
  const hasDarkTheme = useHasDarkTheme();
  const toggleTheme = useThemeToggle();

  return (
    <MainButton
      className={cn(style.root, className)}
      aria-label="Режим тёмной темы"
      aria-pressed={hasDarkTheme}
      onClick={toggleTheme}
    >
      {`Go ${hasDarkTheme ? 'light' : 'dark'}`}
    </MainButton>
  );
};
