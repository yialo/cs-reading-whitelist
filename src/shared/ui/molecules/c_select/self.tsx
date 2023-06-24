import * as React from 'react';
import cn from 'clsx';
import { KEYBOARD_KEY } from '@/shared/config';
import type { WithClassName } from '@/shared/ui';
import { Button } from '../../atoms';
import style from './style.scss';

interface Props extends WithClassName {
  dict: Record<string, string>;
  tip: React.ReactNode;
  value: string;
  onChange: (newValue: string) => void;
  tipIdPrefix?: string;
}

const TOGGLE_BUTTON_ID = 'filter-toggle-button';

export const Select: React.FC<Props> = ({
  className,
  dict,
  tip,
  tipIdPrefix,
  value,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const tipId = `select-tip${tipIdPrefix ? `-${tipIdPrefix}` : ''}`;

  const $toggleButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        !$toggleButtonRef.current ||
        $toggleButtonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setIsExpanded(false);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
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
          ref={$toggleButtonRef}
          className={cn(style.toggleButton, {
            [style.toggleButton_hasPopup!]: isExpanded,
          })}
          id={TOGGLE_BUTTON_ID}
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          aria-labelledby={`${tipId} ${TOGGLE_BUTTON_ID}`}
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
                      $toggleButtonRef.current?.focus();
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
