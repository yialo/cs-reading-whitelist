import * as React from 'react';
import { NavLink } from 'react-router';

import { KEYBOARD_KEY } from '@/shared/config';
import { cn } from '@/shared/lib/cn';
import { APP_ROUTE, type AppRoute } from '@/shared/routing';

import { AppNavMenuIcon } from './icon';
import style from './style.scss';

type NavLink = {
  url: AppRoute;
  label: string;
};

const ROUTE_LIST = [
  {
    url: APP_ROUTE.HOME,
    label: 'Reading',
  },
  {
    url: APP_ROUTE.STRINGER,
    label: 'Stringer',
  },
] as const satisfies readonly NavLink[];

export const AppNavMenu: React.FC<{ className?: string }> = ({ className }) => {
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
