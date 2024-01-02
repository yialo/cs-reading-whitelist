import * as React from 'react';
import cn from 'clsx';
import { NavLink } from 'react-router-dom';
import { KEYBOARD_KEY, ROUTE, type Route } from '@/shared/config';
import type { WithClassName } from '@/shared/ui';
import { AppNavMenuIcon } from './icon';
import style from './style.scss';

interface NavLink {
  url: Route;
  label: string;
}

const ROUTE_LIST: ReadonlyArray<NavLink> = [
  {
    url: ROUTE.HOME,
    label: 'Reading',
  },
] as const;

export const AppNavMenu: React.FC<WithClassName> = ({ className }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleMenuExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEY.ESCAPE) {
        setIsExpanded(false);
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
        isCollapsedScreenSm: !isExpanded,
      })}
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isExpanded}
        aria-label="Меню"
        className={style.button}
        type="button"
        onClick={handleMenuExpansion}
      >
        <AppNavMenuIcon isExpanded={isExpanded} />
      </button>
      <ul className={style.list}>
        {ROUTE_LIST.map(({ url, label }) => (
          <li key={label}>
            <NavLink
              className={({ isActive }) =>
                cn(style.link, {
                  [style.link_active!]: isActive,
                })
              }
              to={url}
              end
              onClick={() => {
                setIsExpanded(false);
              }}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
