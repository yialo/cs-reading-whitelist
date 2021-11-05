import * as React from 'react';
import cn from 'clsx';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { KEYBOARD_KEY } from '@/enums';
import { TClassNameable } from '@/types';

import { AppNavMenuIcon } from './c_icon';

import style from './style.scss';

type TNavLink = {
  url: string;
  label: string;
};

const routeList: ReadonlyArray<TNavLink> = [
  {
    url: ROUTES.HOME,
    label: 'Reading',
  },
  {
    url: ROUTES.NAMING,
    label: 'Naming',
  },
] as const;

const BUTTON_ID = 'AppNavMenu-list';

export const RootNavMenu: React.FC<TClassNameable> = ({ className }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleMenuExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEY.ESCAPE) {
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
      className={cn(style.root, className, {
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
        {routeList.map(({ url, label }) => (
          <li key={label}>
            <NavLink
              className={({ isActive }) => cn(style.link, {
                [style.link_active!]: isActive,
              })}
              to={url}
              end
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
