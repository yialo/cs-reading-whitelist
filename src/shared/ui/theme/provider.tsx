import * as React from 'react';

import {
  ThemeStateContext,
  ThemeUpdaterContext,
  Theme,
  THEME_LS_KEY,
} from './config';

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  return (
    <ThemeStateContext value={theme}>
      <ThemeUpdaterContext value={setTheme}>{children}</ThemeUpdaterContext>
    </ThemeStateContext>
  );
};

const getInitialTheme = (): Theme => {
  const theme = localStorage.getItem(THEME_LS_KEY);

  if (isTheme(theme)) {
    return theme;
  }

  return 'light';
};

const isTheme = (maybeTheme: string | null): maybeTheme is Theme =>
  maybeTheme === 'light' || maybeTheme === 'dark';
