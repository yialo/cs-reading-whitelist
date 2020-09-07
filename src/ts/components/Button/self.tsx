import React from 'react';
import classNames from 'classnames';

import style from './style.scss';

interface IProps {
  children?: React.ReactChild;
  className?: string;
  disabled?: boolean;
  'aria-checked'?: boolean;
  'aria-label'?: string;
  role?: string;
  onClick: () => void;
}

export const Button: React.FC<IProps> = ({
  children,
  className,
  disabled,
  'aria-checked': ariaChecked,
  'aria-label': ariaLabel,
  role,
  onClick,
}) => {
  return (
    <button
      className={classNames(style.root, className)}
      disabled={disabled}
      type="button"
      aria-checked={ariaChecked}
      aria-label={ariaLabel}
      role={role}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  children: undefined,
  disabled: false,
  'aria-checked': undefined,
  'aria-label': undefined,
  role: undefined,
};
