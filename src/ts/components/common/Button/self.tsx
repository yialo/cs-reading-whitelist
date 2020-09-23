import React from 'react';
import classNames from 'classnames';

import style from './style.scss';

export type ButtonPropsType = React.ComponentPropsWithoutRef<'button'>;

export const Button: React.FC<ButtonPropsType> = ({
  children,
  className,
  type,
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

Button.defaultProps = {
  className: '',
  type: 'button',
};
