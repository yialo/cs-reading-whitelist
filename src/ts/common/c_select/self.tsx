import React, { useState } from 'react';
import classNames from 'classnames';

import { Button } from 'common/c_button';

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

  return (
    <div className={classNames(style.root, className)}>
      <span className={style.tip} id={tipId}>
        {tip}
      </span>

      <div className={style.body}>
        <Button
          className={style.expanderButton}
          id="filter"
          aria-labelledby={tipId}
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
