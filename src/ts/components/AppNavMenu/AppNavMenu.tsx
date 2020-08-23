import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import style from './style.scss';

interface IProps {
  className?: string;
}

const routeList = [
  [ROUTES.HOME, 'My reading'],
  [ROUTES.CLASSNAMES, 'Classnames'],
];

export const AppNavMenu: React.FC<IProps> = ({ className }) => {
  return (
    <nav className={classNames(style.root, className)}>
      <button
        // TODO: improve a11y
        aria-label="Меню"
        className={style.button}
        type="button"
      />
      <ul className={style.list}>
        {routeList.map(([route, label]) => (
          <li key={label}>
            <NavLink
              activeClassName={style.link_active}
              className={style.link}
              to={route}
              exact
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

AppNavMenu.defaultProps = {
  className: '',
};
