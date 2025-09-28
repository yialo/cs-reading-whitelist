import * as React from 'react';

export type Theme = 'light' | 'dark';
type ThemeDispatch = React.Dispatch<React.SetStateAction<Theme>>;

export const ThemeStateContext = React.createContext<Theme | undefined>(
  undefined,
);
ThemeStateContext.displayName = 'ThemeStateContext';

export const ThemeUpdaterContext = React.createContext<
  ThemeDispatch | undefined
>(undefined);
ThemeUpdaterContext.displayName = 'ThemeUpdaterContext';

export const THEME_LS_KEY = 'ui-theme';
