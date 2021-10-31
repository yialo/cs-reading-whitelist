import * as React from 'react';
import cn from 'classnames';

import { TClassNameable } from '@/types';

import { RootNavMenu } from '../c_nav-menu';
import { ThemeToggle } from '../c_theme-toggle';

import style from './self.scss';

export const RootHeader: React.FC<TClassNameable> = ({ className }) => {
  return (
    <header className={cn(style.root, className)}>
      <RootNavMenu />
      <ThemeToggle className={style.themeToggle} />
    </header>
  );
};
