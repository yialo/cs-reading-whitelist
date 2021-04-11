import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme } from 'ts/store/action-creators';
import { themeSelector } from 'ts/store/selectors';
import type { TClassNameable } from 'ts/types';

import { RootNavMenu } from '../c_nav-menu';
import { ThemeToggle } from '../c_theme-toggle';

import style from './style.scss';

export const RootHeader: React.FC<TClassNameable> = ({ className }) => {
  const hasDarkTheme = useSelector(themeSelector.isDark);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={classNames(style.root, className)}>
      <RootNavMenu />

      <ThemeToggle
        className={style.themeToggle}
        isDark={hasDarkTheme}
        onToggle={handleToggle}
      />
    </header>
  );
};
