import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { WithClassName } from '@/shared/ui/types';

import style from './style.scss';

type Props = WithClassName & {
  ref?: React.Ref<HTMLInputElement>;
  inputMode: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  legend: string;
  tipChar?: string | undefined;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput: React.FC<Props> = ({
  className,
  ref,
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
          ref={ref}
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

            if (ref && typeof ref !== 'function') {
              ref.current?.focus();
            }
          }}
        />
      )}
    </div>
  );
};
