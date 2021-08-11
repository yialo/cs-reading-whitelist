import React, { useEffect } from 'react';
import classNames from 'classnames';

import { PageSwitcher } from 'ts/pages';
import { useHasDarkTheme } from 'ts/common/theme';

import { RootFooter } from './c_footer';
import { RootHeader } from './c_header';

import style from './style.scss';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  $overlay?.classList.add('isHidden');
};

export const Root: React.FC = () => {
  const hasDarkTheme = useHasDarkTheme();

  useEffect(() => {
    disableOverlay();
  }, []);

  return (
    <div className={classNames(style.root, { 'hasDarkTheme': hasDarkTheme })}>
      <RootHeader className={style.header} />
      <PageSwitcher />
      <RootFooter />
    </div>
  );
};
