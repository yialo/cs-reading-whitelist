import * as React from 'react';
import cn from 'classnames';

import style from './style.scss';

type TButtonPropsWithoutForwardedRef = React.ComponentPropsWithoutRef<'button'>;

export type TButtonProps = TButtonPropsWithoutForwardedRef & {
  forwardedRef?: React.ForwardedRef<HTMLButtonElement>;
};

const Button: React.FC<TButtonProps> = ({
  children,
  className,
  forwardedRef,
  type = 'button',
  ...propsRest
}) => {
  return (
    <button
      ref={forwardedRef}
      className={cn(style.root, className)}
      type={type}
      {...propsRest}
    >
      {children}
    </button>
  );
};

export const ButtonWithRef = React.forwardRef<HTMLButtonElement, TButtonPropsWithoutForwardedRef>(
  (props, ref) => <Button {...props} forwardedRef={ref} />,
);

ButtonWithRef.displayName = 'Button';
