import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { KEYBOARD_KEYS, ROUTES } from 'ts/constants';

import { AppNavMenuIcon } from './c_icon';

import style from './style.scss';

interface IProps {
  className?: string;
}

const routeList = [
  [ROUTES.HOME, 'Reading'],
  [ROUTES.NAMING, 'Naming'],
];

const BUTTON_ID = 'AppNavMenu-list';

export const RootNavMenu: React.FC<IProps> = ({ className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEYS.ESCAPE) {
        setIsExpanded((prev) => prev && !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav
      className={classNames(style.root, className, {
        'isCollapsedScreenSm': !isExpanded,
      })}
    >
      <button
        aria-controls={BUTTON_ID}
        aria-expanded={isExpanded}
        aria-label="Меню"
        className={style.button}
        type="button"
        onClick={handleMenuExpansion}
      >
        <AppNavMenuIcon isExpanded={isExpanded} />
      </button>
      <ul className={style.list} id={BUTTON_ID}>
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
