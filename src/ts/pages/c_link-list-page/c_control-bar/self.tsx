import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import { Button } from 'ts/common/c_button';
import { Select } from 'ts/common/c_select';
import { TextInput } from 'ts/common/c_text-input';
import { EFilter, ESorting } from 'ts/constants';
import type { TClassNameable, TFilterName, TSortingName } from 'ts/types';

import { ControlBarAmountMeter } from './c_amount-meter';

import style from './style.scss';

type TProps = TClassNameable & {
  filterTarget: TFilterName;
  searchString: string;
  sortingTarget: TSortingName;
  totalAmount: number;
  visibleAmount: number;
  onFilterToggle: (name: TFilterName) => void;
  onSearch: React.ChangeEventHandler;
  onSortingToggle: (name: TSortingName) => void;
};

const FILTER_DICT = {
  [EFilter.CAPTION]: 'заголовку',
  [EFilter.HASHTAG]: 'хэштегу',
  [EFilter.URL]: 'URL-адресу',
} as const;

const SORTING_DICT = {
  [ESorting.NEW]: 'новые',
  [ESorting.OLD]: 'старые',
} as const;

const sortingGroupLabelId = 'sorting-group-label';

const getInputTipChar = (filterTarget: EFilter) => {
  switch (filterTarget) {
    case (EFilter.HASHTAG):
      return '#';

    case (EFilter.URL):
      return '://';

    default:
      return undefined;
  }
};

export const ControlBar: React.FC<TProps> = ({
  className,
  filterTarget,
  searchString,
  sortingTarget,
  totalAmount,
  visibleAmount,
  onFilterToggle,
  onSearch,
  onSortingToggle,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={classNames(style.root, className)}>
      <div className={style.filter}>
        <Select
          tip="Искать по:"
          filterDict={FILTER_DICT}
          value={filterTarget}
          onChange={onFilterToggle}
        />
      </div>

      <TextInput
        ref={inputRef}
        className={style.searchbar}
        inputMode="search"
        legend="Введите текст для поиска"
        tipChar={getInputTipChar(filterTarget)}
        value={searchString}
        onChange={onSearch}
      />

      <div className={style.sorting}>
        <span className={style.sorting__tip} id={sortingGroupLabelId}>Сортировка:</span>

        <div
          className={style.sorting__controls}
          aria-labelledby={sortingGroupLabelId}
          role="radiogroup"
        >
          {Object.entries(SORTING_DICT).map(([name, legend]) => {
            const isCurrent = (name === sortingTarget);
            return (
              <Button
                key={name}
                className={style.sorting__button}
                disabled={isCurrent}
                aria-checked={isCurrent}
                role="radio"
                onClick={() => {
                  onSortingToggle(name as TSortingName);
                }}
              >
                {`Сначала ${legend}`}
              </Button>
            );
          })}
        </div>
      </div>

      <ControlBarAmountMeter
        isFiltered={searchString !== ''}
        {...{
          totalAmount,
          visibleAmount,
        }}
      />
    </div>
  );
};
