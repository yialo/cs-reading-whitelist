import * as React from 'react';

import { KEYBOARD_KEY } from '@/shared/config';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { Portal } from '@/shared/ui/portal';
import { RadixPopover } from '@/shared/lib/radix-ui/popover';

import style from './self_legacy.scss';

export const Select: React.FC<{
  className?: string;
  dict: Record<string, string>;
  tip: React.ReactNode;
  value: string;
  onChange: (newValue: string) => void;
}> = ({ className, dict, tip, value, onChange }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);

  const tipId = React.useId();

  const options = React.useMemo(() => Object.entries(dict), [dict]);

  const handleTriggerKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = ({
    key,
  }) => {
    if (!isExpanded && key === KEYBOARD_KEY.DOWN) {
      setIsExpanded(true);
    }
  };

  const handleOptionKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = ({
    key,
  }) => {
    let shift = 0;

    if (key === KEYBOARD_KEY.DOWN) {
      shift = 1;
    } else if (key === KEYBOARD_KEY.UP) {
      shift = -1;
    }

    if (!shift) {
      return;
    }

    const currentOptionIndex = options.findIndex(
      (option) => option[0] === value,
    );
    const newOptionValue = options[currentOptionIndex + shift]?.[0];

    if (newOptionValue) {
      onChange(newOptionValue);
    }
  };

  return (
    <div className={cn(style.root, className)}>
      <span className={style.tip} id={tipId}>
        {tip}
      </span>

      <RadixPopover open={isExpanded} onOpenChange={setIsExpanded}>
        <RadixPopover.Trigger asChild>
          <Button
            ref={toggleButtonRef}
            className={cn(style.toggleButton, {
              [style.toggleButton_hasPopup]: isExpanded,
            })}
            onKeyDown={handleTriggerKeyDown}
          >
            {dict[value]}
          </Button>
        </RadixPopover.Trigger>

        <RadixPopover.Portal>
          <RadixPopover.Content align="start">
            <ul className={style.list} role="listbox">
              {options.map(([name, caption]) => {
                const isSelected = name === value;

                return (
                  <li
                    key={name}
                    className={style.option}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <Button
                      className={cn(style.optionButton, {
                        [style.optionButton_selected]: isSelected,
                      })}
                      onClick={() => {
                        setIsExpanded(false);
                        onChange(name);
                        toggleButtonRef.current?.focus();
                      }}
                      onKeyDown={handleOptionKeyDown}
                    >
                      {caption}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover>
    </div>
  );
};
