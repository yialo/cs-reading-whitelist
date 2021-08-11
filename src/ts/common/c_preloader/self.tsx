import React from 'react';
import classNames from 'classnames';

import { TClassNameable } from 'ts/types';

import style from './style.scss';

export const Preloader: React.FC<TClassNameable> = ({ className }) => {
  return (
    <div className={classNames(style.root, className)} role="status">
      <span className="Spinner" aria-label="Пожалуйста, подождите..." />
    </div>
  );
};
