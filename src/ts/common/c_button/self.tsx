import React from 'react';
import classNames from 'classnames';

import style from './style.scss';

export type TButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const Button: React.FC<TButtonProps> = ({
  children,
  className,
  type = 'button',
  ...propsRest
}) => {
  return (
    <button
      className={classNames(style.root, className)}
      type={type}
      {...propsRest}
    >
      {children}
    </button>
  );
};
