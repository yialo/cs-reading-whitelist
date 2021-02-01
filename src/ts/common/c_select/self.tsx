import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { Button } from 'common/c_button';
import { KEYBOARD_KEYS } from 'ts/constants';

import style from './style.scss';

interface ISelectProps {
  className?: string;
  filterDict: {
    [filter: string]: string;
  };
  tipIdPrefix?: string;
  tip: React.ReactNode;
  value: string;
  onChange: (filter: string) => void;
}

const TOGGLE_BUTTON_ID = 'filter-toggle-button';

export const Select: React.FC<ISelectProps> = ({
  className,
  filterDict,
  tip,
  tipIdPrefix,
  value,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const tipId = `select-tip${tipIdPrefix ? `-${tipIdPrefix}` : ''}`;

  const $toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleCollapse = () => {
      setIsExpanded((prev) => prev && !prev);
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === KEYBOARD_KEYS.ESCAPE) {
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
    <div className={classNames(style.root, className)}>
      <span className={style.tip} id={tipId}>
        {tip}
      </span>

      <div className={style.body}>
        <Button
          ref={$toggleButtonRef}
          className={classNames(style.toggleButton, {
            [style.toggleButton_hasPopup]: isExpanded,
          })}
          id={TOGGLE_BUTTON_ID}
          aria-haspopup="listbox"
          aria-labelledby={`${tipId} ${TOGGLE_BUTTON_ID}`}
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          {filterDict[value]}
        </Button>

        {isExpanded && (
          <ul className={style.list} role="listbox">
            {Object.entries(filterDict).map(([filter, filterName]) => {
              const isSelected = filter === value;

              return (
                <li
                  key={filter}
                  className={style.option}
                  role="option"
                  aria-selected={isSelected}
                >
                  <Button
                    className={classNames(style.optionButton, {
                      [style.optionButton_selected]: isSelected,
                    })}
                    onClick={() => {
                      setIsExpanded(false);
                      onChange(filter);
                    }}
                  >
                    {filterName}
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
