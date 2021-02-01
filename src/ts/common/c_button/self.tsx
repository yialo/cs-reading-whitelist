import React, { forwardRef } from 'react';
import classNames from 'classnames';

import style from './style.scss';

type IButtonPropsWithoutForwardedRef = React.ComponentPropsWithoutRef<'button'>;

export interface IButtonProps extends IButtonPropsWithoutForwardedRef {
  forwardedRef: React.ForwardedRef<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  forwardedRef,
  type = 'button',
  ...propsRest
}) => {
  return (
    <button
      ref={forwardedRef}
      className={classNames(style.root, className)}
      type={type}
      {...propsRest}
    >
      {children}
    </button>
  );
};

export const ButtonWithRef = forwardRef<HTMLButtonElement, IButtonPropsWithoutForwardedRef>(
  (props, ref) => <Button {...props} forwardedRef={ref} />,
);
ButtonWithRef.displayName = 'Button';
