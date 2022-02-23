import * as React from 'react';
import cn from 'clsx';

import { useHasDarkTheme } from '@/components/theme';

import { RootFooter } from '../c_footer';
import { RootHeader } from '../c_header';
import { PageSwitcher } from '../c_page-switcher';

import style from './self.scss';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  $overlay?.remove();
};

export const Root: React.FC = () => {
  const hasDarkTheme = useHasDarkTheme();

  React.useEffect(() => {
    disableOverlay();
  }, []);

  return (
    <div className={cn(style.root, { 'hasDarkTheme': hasDarkTheme })}>
      <RootHeader className={style.header} />
      <PageSwitcher />
      <RootFooter />
    </div>
  );
};
