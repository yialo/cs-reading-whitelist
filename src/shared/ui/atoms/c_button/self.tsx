import * as React from 'react';

import { cn } from '@/shared/lib/cn';

import style from './style.scss';

export type ButtonProps = React.ComponentProps<'button'>;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ref,
  type = 'button',
  ...propsRest
}) => {
  return (
    <button
      {...propsRest}
      ref={ref}
      className={cn(style.root, className)}
      type={type}
    >
      {children}
    </button>
  );
};
