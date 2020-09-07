import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import * as actionCreators from 'ts/actionCreators';
import { AppNavMenu as NavMenu } from '../NavMenu';
import { ThemeToggle } from 'ts/components/ThemeToggle';
import { useActions } from 'ts/hooks';
import type { ActionCreatorType } from 'ts/reducers';
import { themeSelector } from 'ts/selectors';

import style from './style.scss';

interface IProps {
  className?: string;
}

export const AppHeader: React.FC<IProps> = ({ className }) => {
  const hasDarkTheme = useSelector(themeSelector.isDark);

  const { toggleTheme } = useActions(actionCreators, []) as {
    [key: string]: ActionCreatorType;
  };

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

AppHeader.defaultProps = {
  className: '',
};
