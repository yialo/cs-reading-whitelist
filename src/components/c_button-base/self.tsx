import * as React from 'react';
import cn from 'clsx';

import { Button, TButtonProps } from '@/components/c_button';

import style from './style.scss';

export const ButtonBase: React.FC<TButtonProps> = ({ className, ...propsRest }) => {
  return (
    <Button className={cn(style.root, className)} {...propsRest} />
  );
};
