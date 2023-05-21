import * as React from 'react';
import cn from 'clsx';
import style from './style.scss';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  forwardedRef?: React.ForwardedRef<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
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

const ButtonWithRef = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>((props, ref) => <Button {...props} forwardedRef={ref} />);

ButtonWithRef.displayName = 'Button';

export { ButtonWithRef as Button };
