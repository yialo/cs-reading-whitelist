import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/button';
import type { TButtonProps } from 'common/button';

import style from './style.scss';

export const MainButton: React.FC<TButtonProps> = ({ className, ...propsRest }) => {
  return (
    <Button className={classNames(style.root, className)} {...propsRest} />
  );
};
