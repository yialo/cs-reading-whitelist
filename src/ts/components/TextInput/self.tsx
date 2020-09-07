import classNames from 'classnames';
import React from 'react';

import { InputModeType } from 'ts/types';

import style from './style.scss';

interface IProps {
  className?: string;
  // TODO: add correct type from @types/react or DOM instead of inline
  inputMode: InputModeType;
  legend: string;
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
}

export const TextInput: React.FC<IProps> = (props: IProps) => {
  const {
    className,
    inputMode,
    legend,
    value,
    onChange,
  } = props;

  return (
    <label
      className={classNames(style.root, !!className && className)}
      aria-label={legend}
    >
      <input
        className={style.field}
        inputMode={inputMode}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

TextInput.defaultProps = {
  className: '',
};
