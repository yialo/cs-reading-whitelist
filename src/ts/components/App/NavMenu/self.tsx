import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { AppNavMenuIcon } from './Icon';

import style from './style.scss';

interface IProps {
  className?: string;
}

const routeList = [
  [ROUTES.HOME, 'My reading'],
  [ROUTES.CLASSNAMES, 'Classnames'],
];

const buttonId = 'AppNavMenu-list';

export const AppNavMenu: React.FC<IProps> = ({ className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <nav
      className={classNames(style.root, className, {
        'isCollapsedScreenSm': !isExpanded,
      })}
    >
      <button
        aria-controls={buttonId}
        aria-expanded={isExpanded}
        aria-label="Меню"
        className={style.button}
        type="button"
        onClick={handleMenuExpansion}
      >
        <AppNavMenuIcon isExpanded={isExpanded} />
      </button>
      <ul className={style.list} id={buttonId}>
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
