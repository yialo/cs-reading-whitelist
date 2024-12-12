import * as React from 'react';
import { useLocation } from 'react-router';

import { DOM_ID } from '@/shared/config';
import { usePrevious } from '@/shared/hooks';
import { cn } from '@/shared/lib/cn';
import { useHasDarkTheme } from '@/shared/ui';

import { RootFooter } from './footer';
import { RootHeader } from './header';
import { PageSwitcher } from './page-switcher';
import style from './self.scss';

export const Root: React.FC = () => {
  const { pathname } = useLocation();
  const prevPathName = usePrevious(pathname);

  const hasDarkTheme = useHasDarkTheme();

  React.useEffect(() => {
    const overlay = document.getElementById('page-overlay');
    overlay?.remove();
  }, []);

  React.useEffect(() => {
    const appRoot = document.getElementById(DOM_ID.APP_ROOT);

    if (appRoot && pathname !== prevPathName) {
      appRoot.scrollTo({ top: 0 });
    }
  }, [pathname, prevPathName]);

  return (
    <div className={cn(style.root, { hasDarkTheme })}>
      <RootHeader className={style.header} />
      <PageSwitcher />
      <RootFooter />
    </div>
  );
};
