import * as React from 'react';
import cn from 'clsx';

import { Button, type TButtonProps } from './self';

import style from './style.scss';

export const MainButton: React.FC<TButtonProps> = ({
  className,
  ...propsRest
}) => {
  return <Button className={cn(style.root_main, className)} {...propsRest} />;
};
