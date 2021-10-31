import * as React from 'react';
import classNames from 'classnames';

import { TClassNameable } from '@/types';

import style from './style.scss';

type TTextPropsWithoutForwardedRef = TClassNameable & {
  inputMode: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  legend: string;
  tipChar?: string | undefined;
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
};

type TProps = TTextPropsWithoutForwardedRef & {
  forwardedRef: React.ForwardedRef<HTMLInputElement>;
};

const TextInput: React.FC<TProps> = ({
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

export const TextInputWithForwardedRef = React.forwardRef<
HTMLInputElement,
TTextPropsWithoutForwardedRef
>((props, ref) => <TextInput {...props} forwardedRef={ref} />);

TextInputWithForwardedRef.displayName = 'TextInput';
