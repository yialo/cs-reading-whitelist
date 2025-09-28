import * as React from 'react';

import { useStrictContext } from '@/shared/lib/react';

import {
  Theme,
  THEME_LS_KEY,
  ThemeStateContext,
  ThemeUpdaterContext,
} from './config';

export const useHasDarkTheme = () => {
  const theme = useStrictContext(ThemeStateContext);

  React.useEffect(() => {
    localStorage.setItem(THEME_LS_KEY, theme);
  }, [theme]);

  return theme === 'dark';
};

export const useThemeToggle = () => {
  const setTheme = useStrictContext(ThemeUpdaterContext);

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme: Theme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return toggleTheme;
};
