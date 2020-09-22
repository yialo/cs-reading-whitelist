import React from 'react';
import classNames from 'classnames';

import { Button } from './self';
import type { ButtonPropsType } from './self';

import style from './style.scss';

export const MainButton: React.FC<ButtonPropsType> = ({ className, ...propsRest }) => {
  return (
    <Button className={classNames(style.root_main, className)} {...propsRest} />
  );
};

MainButton.displayName = 'main(Button)';
