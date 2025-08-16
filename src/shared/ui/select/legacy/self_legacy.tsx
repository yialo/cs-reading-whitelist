import * as React from 'react';

import { KEYBOARD_KEY } from '@/shared/config';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { WithClassName } from '@/shared/ui/types';

import style from './self_legacy.scss';

export const Select: React.FC<
  WithClassName & {
    dict: Record<string, string>;
    tip: React.ReactNode;
    value: string;
    onChange: (newValue: string) => void;
  }
> = ({ className, dict, tip, value, onChange }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);

  const tipId = React.useId();
  const toggleButtonId = React.useId();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !toggleButtonRef.current ||
        !(event.target instanceof Node) ||
        toggleButtonRef.current.contains(event.target)
      ) {
        return;
      }

      setIsExpanded(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const options = React.useMemo(() => Object.entries(dict), [dict]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = ({
    key,
  }) => {
    if (!isExpanded) {
      if (key === KEYBOARD_KEY.DOWN) {
        setIsExpanded(true);
        return;
      }
    }

    if (key === KEYBOARD_KEY.ESCAPE) {
      setIsExpanded(false);
      return;
    }

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

      <div className={style.body}>
        <Button
          ref={toggleButtonRef}
          className={cn(style.toggleButton, {
            [style.toggleButton_hasPopup!]: isExpanded,
          })}
          id={toggleButtonId}
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          aria-labelledby={[tipId, toggleButtonId].join(' ')}
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
          onKeyDown={handleKeyDown}
        >
          {dict[value]}
        </Button>

        {isExpanded && (
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
                      [style.optionButton_selected!]: isSelected,
                    })}
                    onClick={() => {
                      setIsExpanded(false);
                      onChange(name);
                      toggleButtonRef.current?.focus();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === KEYBOARD_KEY.ESCAPE) {
                        setIsExpanded(false);
                      }
                    }}
                  >
                    {caption}
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
