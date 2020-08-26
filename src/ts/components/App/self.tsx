import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { AppHeader as Header } from './Header';
import { PageSwitcher } from 'ts/components/pages';
import { themeSelector } from 'ts/selectors';

import style from './style.scss';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  $overlay?.classList.add('isHidden');
};

export const App: React.FC = () => {
  const hasDarkTheme = useSelector(themeSelector.isDark);

  useEffect(() => {
    disableOverlay();
  }, []);

  return (
    <div className={classNames(style.root, { 'hasDarkTheme': hasDarkTheme })}>
      <Header className={style.header} />
      <PageSwitcher />
    </div>
  );
};
