import React, { forwardRef } from 'react';
import classNames from 'classnames';

import style from './style.scss';

interface ITextPropsWithoutForwardedRef {
  className?: string;
  inputMode: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  legend: string;
  tipChar?: string;
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
}

interface ITextInputProps extends ITextPropsWithoutForwardedRef {
  forwardedRef: React.ForwardedRef<HTMLInputElement>;
}

const TextInput: React.FC<ITextInputProps> = ({
  className,
  forwardedRef,
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

TextInput.displayName = 'TextInput';

export const TextInputWithForwardedRef = forwardRef<
HTMLInputElement,
ITextPropsWithoutForwardedRef
>((props, ref) => <TextInput {...props} forwardedRef={ref} />);

TextInputWithForwardedRef.displayName = 'TextInput';
