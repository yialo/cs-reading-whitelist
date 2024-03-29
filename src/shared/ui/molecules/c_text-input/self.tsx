import * as React from 'react';
import { cn } from '@/shared/lib/cn';
import type { WithClassName } from '@/shared/ui';
import { Button } from '../../atoms';
import style from './style.scss';

interface TextPropsWithoutForwardedRef extends WithClassName {
  inputMode: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  legend: string;
  tipChar?: string | undefined;
  value: string;
  onChange: (value: string) => void;
}

interface Props extends TextPropsWithoutForwardedRef {
  forwardedRef: React.ForwardedRef<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({
  className,
  forwardedRef,
  inputMode,
  legend,
  tipChar,
  value,
  onChange,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  const hasTipChar = !!tipChar;
  const hasClearButton = value !== '';

  return (
    <div className={cn(style.root, className)}>
      {hasTipChar && (
        <span className={style.tipChar} aria-hidden="true">
          {tipChar}
        </span>
      )}

      <label className={style.label} aria-label={legend}>
        <input
          ref={forwardedRef}
          className={cn(style.field, {
            [style.field_adjacent_left!]: hasTipChar,
            [style.field_adjacent_right!]: hasClearButton,
          })}
          inputMode={inputMode}
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>

      {hasClearButton && (
        <Button
          aria-label="Очистить поле ввода"
          className={style.clear}
          onClick={() => {
            onChange('');

            if (forwardedRef && typeof forwardedRef !== 'function') {
              forwardedRef.current?.focus();
            }
          }}
        />
      )}
    </div>
  );
};

export const TextInputWithForwardedRef = React.forwardRef<
  HTMLInputElement,
  TextPropsWithoutForwardedRef
>((props, ref) => <TextInput {...props} forwardedRef={ref} />);

TextInputWithForwardedRef.displayName = 'ForwardRef(TextInput)';
