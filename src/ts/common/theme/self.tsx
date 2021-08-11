import * as React from 'react';

type TThemeName = 'light' | 'dark';
type TThemeDispatch = React.Dispatch<React.SetStateAction<TThemeName>>;

const ThemeStateContext = React.createContext<TThemeName | undefined>(undefined);
const ThemeUpdaterContext = React
  .createContext<TThemeDispatch | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<TThemeName>('light');

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

  return theme === 'dark';
};

export const useThemeToggle = () => {
  const setTheme = React.useContext(ThemeUpdaterContext);

  if (setTheme === undefined) {
    throw new Error('useThemeToggle must be used within a ThemeProvider');
  }

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme: TThemeName) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return toggleTheme;
};
