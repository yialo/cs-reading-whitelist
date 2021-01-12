import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { PageSwitcher } from 'ts/pages';
import { themeSelector } from 'ts/selectors';

import { RootFooter } from './c_footer';
import { RootHeader } from './c_header';

import style from './style.scss';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  $overlay?.classList.add('isHidden');
};

export const Root: React.FC = () => {
  const hasDarkTheme = useSelector(themeSelector.isDark);

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
