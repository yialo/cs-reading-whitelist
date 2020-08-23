import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { AppHeader } from 'ts/components/AppHeader';
import { PageSwitcher } from 'ts/components/Pages';
import { themeSelector } from 'ts/selectors';

import style from './style.scss';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  if ($overlay) {
    $overlay.classList.add('isHidden');
  }
};

export const App: React.FC = () => {
  const hasDarkTheme = useSelector(themeSelector.isDark);
  const location = useLocation();

  useEffect(() => {
    disableOverlay();
    console.log(location);
  }, [location]);

  return (
    <div className={classNames(style.root, { 'hasDarkTheme': hasDarkTheme })}>
      <AppHeader className={style.header} />
      <PageSwitcher />
    </div>
  );
};
