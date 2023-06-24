import * as React from 'react';

type ThemeName = 'light' | 'dark';
type ThemeDispatch = React.Dispatch<React.SetStateAction<ThemeName>>;

const ThemeStateContext = React.createContext<ThemeName | undefined>(undefined);
const ThemeUpdaterContext = React.createContext<ThemeDispatch | undefined>(
  undefined,
);

const THEME_LS_KEY = 'ui-theme';

const getInitialTheme = (): ThemeName => {
  let theme = localStorage.getItem(THEME_LS_KEY) as ThemeName | null;

  if (!theme) {
    theme = 'light';
  }

  return theme;
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
  const theme = React.useContext(ThemeStateContext);

  if (theme === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }

  React.useEffect(() => {
    localStorage.setItem(THEME_LS_KEY, theme);
  }, [theme]);

  return theme === 'dark';
};

export const useThemeToggle = () => {
  const setTheme = React.useContext(ThemeUpdaterContext);

  if (setTheme === undefined) {
    throw new Error('useThemeToggle must be used within a ThemeProvider');
  }

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme: ThemeName) =>
      prevTheme === 'dark' ? 'light' : 'dark',
    );
  }, [setTheme]);

  return toggleTheme;
};
