import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import * as actionCreators from 'ts/action-creators';
import { themeSelector } from 'ts/selectors';

import { RootNavMenu } from '../c_nav-menu';
import { ThemeToggle } from '../c_theme-toggle';

import style from './style.scss';

interface IRootHeaderProps {
  className?: string;
}

export const RootHeader: React.FC<IRootHeaderProps> = ({ className }) => {
  const hasDarkTheme = useSelector(themeSelector.isDark);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(actionCreators.toggleTheme());
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
