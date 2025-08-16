import * as React from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

import style from './self_modern-native.scss';

export const Select: React.FC<{
  className?: string;
  dict: Record<string, string>;
  tip: React.ReactNode;
  value: string;
  onChange: (newValue: string) => void;
}> = ({ className, dict, tip, value, onChange }) => {
  const selectId = React.useId();

  const options = React.useMemo(() => Object.entries(dict), [dict]);

  return (
    <div className={cn(style.root, className)}>
      <label htmlFor={selectId} className={style.tip}>
        {tip}
      </label>

      <select
        id={selectId}
        className={style.select}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <Button className={style.trigger}>{dict[value]}</Button>

        {options.map(([name, caption]) => {
          return (
            <option key={name} value={name} className={style.option}>
              {caption}
            </option>
          );
        })}
      </select>
    </div>
  );
};
