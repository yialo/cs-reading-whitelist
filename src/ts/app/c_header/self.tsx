import React from 'react';
import classNames from 'classnames';

import { TClassNameable } from '@/ts/types';

import { RootNavMenu } from '../c_nav-menu';
import { ThemeToggle } from '../c_theme-toggle';

import style from './style.scss';

export const RootHeader: React.FC<TClassNameable> = ({ className }) => {
  return (
    <header className={classNames(style.root, className)}>
      <RootNavMenu />
      <ThemeToggle className={style.themeToggle} />
    </header>
  );
};
