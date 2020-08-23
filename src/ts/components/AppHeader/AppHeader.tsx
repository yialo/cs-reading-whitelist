import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionCreators from 'ts/actionCreators';
import { ThemeToggle } from 'ts/components/ThemeToggle';
import { useActions } from 'ts/hooks';
import { themeSelector } from 'ts/selectors';

import style from './style.scss';

interface IProps {
  className?: string;
}

const ROUTES = [
  ['/', 'Home'],
  ['/classnames', 'Classnames'],
];

export const AppHeader: React.FC<IProps> = ({ className }) => {
  const hasDarkTheme = useSelector(themeSelector.isDark);

  const { toggleTheme } = useActions(actionCreators);

  return (
    <header className={classNames(style.root, className)}>
      <nav>
        <ul className={style.navList}>
          {ROUTES.map(([route, label]) => (
            <li key={label}>
              <Link className={style.navLink} to={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
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
