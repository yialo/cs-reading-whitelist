import * as React from 'react';

import { createStrictContext } from '@/shared/lib/react';

export type Theme = 'light' | 'dark';
type ThemeDispatch = React.Dispatch<React.SetStateAction<Theme>>;

export const ThemeStateContext =
  createStrictContext<Theme>('ThemeStateContext');

export const ThemeUpdaterContext = createStrictContext<ThemeDispatch>(
  'ThemeUpdaterContext',
);

export const THEME_LS_KEY = 'ui-theme';
