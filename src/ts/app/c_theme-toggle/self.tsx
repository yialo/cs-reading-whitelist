import React from 'react';
import classNames from 'classnames';

import { MainButton } from 'ts/common/c_main-button';
import type { TClassNameable } from 'ts/types';

import style from './style.scss';

type TProps = TClassNameable & {
  isDark: boolean;
  onToggle: () => void;
};

export const ThemeToggle: React.FC<TProps> = ({ className, isDark, onToggle }) => {
  return (
    <MainButton
      className={classNames(style.root, className)}
      aria-label={`Перейти к ${isDark ? 'светлой' : 'тёмной'} теме`}
      onClick={onToggle}
    >
      {`Go ${isDark ? 'light' : 'dark'}`}
    </MainButton>
  );
};
