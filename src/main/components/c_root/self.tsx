import * as React from 'react';
import cn from 'clsx';
import { useLocation } from 'react-router-dom';

import { useHasDarkTheme } from '@/components/theme';
import { usePrevious } from '@/hooks/use-previous';

import { RootFooter } from '../c_footer';
import { RootHeader } from '../c_header';
import { PageSwitcher } from '../c_page-switcher';

import style from './self.scss';

const $pageRoot = document.querySelector('.Page-Root');

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  $overlay?.remove();
};

export const Root: React.FC = () => {
  const { pathname } = useLocation();
  const prevPathName = usePrevious(pathname);

  const hasDarkTheme = useHasDarkTheme();

  React.useEffect(() => {
    disableOverlay();
  }, []);

  React.useEffect(() => {
    if ($pageRoot && pathname !== prevPathName) {
      $pageRoot.scrollTo({ top: 0 });
    }
  }, [pathname, prevPathName]);

  return (
    <div className={cn(style.root, { 'hasDarkTheme': hasDarkTheme })}>
      <RootHeader className={style.header} />
      <PageSwitcher />
      <RootFooter />
    </div>
  );
};
