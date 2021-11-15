import * as React from 'react';
import cn from 'clsx';

import { TClassNameable } from '@/types';

import { AppNavMenu } from '../c_nav-menu';
import { ThemeToggle } from '../c_theme-toggle';

import style from './self.scss';

export const RootHeader: React.FC<TClassNameable> = ({ className }) => {
  return (
    <header className={cn(style.root, className)}>
      <AppNavMenu />
      <ThemeToggle className={style.themeToggle} />
    </header>
  );
};
