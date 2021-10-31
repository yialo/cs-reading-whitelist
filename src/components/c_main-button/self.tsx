import * as React from 'react';
import cn from 'classnames';

import { Button, TButtonProps } from '@/components/c_button';

import style from './style.scss';

export const MainButton: React.FC<TButtonProps> = ({ className, ...propsRest }) => {
  return (
    <Button className={cn(style.root, className)} {...propsRest} />
  );
};
