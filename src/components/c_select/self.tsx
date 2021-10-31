import * as React from 'react';
import cn from 'classnames';

import { Button } from '@/components/c_button';
import { KEYBOARD_KEY } from '@/enums';
import { TClassNameable } from '@/types';

import style from './style.scss';

type TProps = TClassNameable & {
  dict: Record<string, string>;
  tipIdPrefix?: string;
  tip: React.ReactNode;
  value: string;
  onChange: (newValue: string) => void;
};

const TOGGLE_BUTTON_ID = 'filter-toggle-button';

export const Select: React.FC<TProps> = ({
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
    const handleCollapse = () => {
      setIsExpanded((prev) => prev && !prev);
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEY.ESCAPE) {
        handleCollapse();
      }
    };

    const handleClick = (event: MouseEvent) => {
      console.log({ target: event.target });

      if (event.target !== $toggleButtonRef.current) {
        handleCollapse();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClick);
    };
  }, []);

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
          aria-haspopup="listbox"
          aria-labelledby={`${tipId} ${TOGGLE_BUTTON_ID}`}
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          {dict[value]}
        </Button>

        {isExpanded && (
          <ul className={style.list} role="listbox">
            {Object.entries(dict).map(([name, caption]) => {
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
