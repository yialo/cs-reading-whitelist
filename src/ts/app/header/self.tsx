import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import * as actionCreators from 'ts/store/actionCreators';
import { AppNavMenu as NavMenu } from '../NavMenu';
import { ThemeToggle } from '../ThemeToggle';
import { useActions } from 'ts/hooks';
import type { SyncActionCreatorType } from 'ts/store/reducers';
import { themeSelector } from 'ts/selectors';

import style from './style.scss';

interface IRootHeaderProps {
  className?: string;
}

interface IHeaderActionCreatorsInputMap {
  toggleTheme: SyncActionCreatorType;
}

export const RootHeader: React.FC<IRootHeaderProps> = ({ className }) => {
  const hasDarkTheme = useSelector(themeSelector.isDark);

  const { toggleTheme } = useActions<IHeaderActionCreatorsInputMap>(actionCreators);

  return (
    <header className={classNames(style.root, className)}>
      <NavMenu />
      <ThemeToggle
        className={style.themeToggle}
        isDark={hasDarkTheme}
        onToggle={toggleTheme}
      />
    </header>
  );
};
