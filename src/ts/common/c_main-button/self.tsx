import React from 'react';
import classNames from 'classnames';

import { Button } from 'common/c_button';
import type { TButtonProps } from 'common/c_button';

import style from './style.scss';

export const MainButton: React.FC<TButtonProps> = ({ className, ...propsRest }) => {
  return (
    <Button className={classNames(style.root, className)} {...propsRest} />
  );
};
