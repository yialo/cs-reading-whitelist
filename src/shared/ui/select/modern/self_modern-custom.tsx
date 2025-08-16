import * as React from 'react';

import { KEYBOARD_KEY } from '@/shared/config';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { WithClassName } from '@/shared/ui/types';

import style from './self_modern-custom.scss';

export const Select: React.FC<{
  className?: string;
  dict: Record<string, string>;
  tip: React.ReactNode;
  value: string;
  onChange: (newValue: string) => void;
}> = ({ className, dict, tip, value, onChange }) => {
  const triggerId = React.useId();
  const popoverId = React.useId();

  return (
    <div className={cn(style.root, className)}>
      <span className={style.tip}>{tip}</span>

      <div className={style.body}>
        <Button
          popoverTarget={popoverId}
          style={
            {
              'anchor-name': `--bob`,
            } as React.CSSProperties
          }
        >
          {dict[value]}
        </Button>

        <div
          popover="auto"
          id={popoverId}
          role="listbox"
          className={style.list}
          style={
            {
              'position-anchor': `--bob`,
            } as React.CSSProperties
          }
        >
          Popover
        </div>
      </div>
    </div>
  );
};
