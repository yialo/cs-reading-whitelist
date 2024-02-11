import * as React from 'react';
import { useStrictContext } from '@/shared/hooks';

type Theme = 'light' | 'dark';
type ThemeDispatch = React.Dispatch<React.SetStateAction<Theme>>;

const ThemeStateContext = React.createContext<Theme | undefined>(undefined);
ThemeStateContext.displayName = 'ThemeStateContext';

const ThemeUpdaterContext = React.createContext<ThemeDispatch | undefined>(
  undefined,
);
ThemeUpdaterContext.displayName = 'ThemeUpdaterContext';

const THEME_LS_KEY = 'ui-theme';

const isTheme = (maybeTheme: string | null): maybeTheme is Theme =>
  maybeTheme === 'light' || maybeTheme === 'dark';

const getInitialTheme = (): Theme => {
  const theme = localStorage.getItem(THEME_LS_KEY);

  if (isTheme(theme)) {
    return theme;
  }

  return 'light';
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeUpdaterContext.Provider value={setTheme}>
        {children}
      </ThemeUpdaterContext.Provider>
    </ThemeStateContext.Provider>
  );
};

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
