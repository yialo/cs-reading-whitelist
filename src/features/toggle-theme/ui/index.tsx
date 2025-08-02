import { cn } from '@/shared/lib/cn';
import { MainButton } from '@/shared/ui/button';
import { useHasDarkTheme, useThemeToggle } from '@/shared/ui/theme';
import { WithClassName } from '@/shared/ui/types';

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
