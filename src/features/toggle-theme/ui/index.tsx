import * as React from 'react';
import cn from 'clsx';
import { MainButton, useHasDarkTheme, useThemeToggle } from '@/shared/ui';
import type { WithClassName } from '@/shared/ui';
import style from './style.scss';

export const ThemeToggle: React.FC<WithClassName> = ({ className }) => {
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
