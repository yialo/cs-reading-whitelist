import classNames from 'classnames';
import React from 'react';

import { InputModeType } from 'ts/types';

import style from './style.scss';

interface IProps {
  className?: string;
  // TODO: add correct type from @types/react or DOM instead of inline
  inputMode: InputModeType;
  legend: string;
  tipChar?: string;
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
}

export const TextInput: React.FC<IProps> = (props: IProps) => {
  const {
    className,
    inputMode,
    legend,
    tipChar,
    value,
    onChange,
  } = props;

  const hasTipChar = !!tipChar;

  return (
    <div className={classNames(style.root, className)}>
      {hasTipChar && (
        <span className={style.tipChar} aria-hidden="true">{tipChar}</span>
      )}
      <label
        className={style.label}
        aria-label={legend}
      >
        <input
          className={style[hasTipChar ? 'field_adjacent' : 'field']}
          inputMode={inputMode}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

TextInput.defaultProps = {
  className: '',
  tipChar: undefined,
};
