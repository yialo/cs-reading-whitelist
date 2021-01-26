import React, { forwardRef } from 'react';
import classNames from 'classnames';

import style from './style.scss';

type InputRef = React.RefObject<HTMLInputElement>;

interface ITextInputProps {
  forwardedRef: InputRef;
  className?: string;
  inputMode: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  legend: string;
  tipChar?: string;
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
}

const TextInput: React.FC<ITextInputProps> = ({
  forwardedRef,
  className,
  inputMode,
  legend,
  tipChar,
  value,
  onChange,
}) => {
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
          ref={forwardedRef}
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

export const TextInputWithRef = forwardRef<ITextInputProps, InputRef>(
  (propsRest, ref) => <TextInput {...propsRest} forwardedRef={ref} />,
);

TextInputWithRef.displayName = 'TextInput';
