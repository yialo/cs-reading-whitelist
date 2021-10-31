import * as React from 'react';
import cn from 'clsx';

import { Button } from '@/components/c_button';
import { Select } from '@/components/c_select';
import { TextInput } from '@/components/c_text-input';
import { TClassNameable } from '@/types';

import { FILTER, TFilter, SORTING, TSorting } from '../../enums';

import { ControlBarAmountMeter } from './c_amount-meter';

import style from './style.scss';

type TProps = TClassNameable & {
  filterTarget: TFilter;
  searchString: string;
  sortingTarget: TSorting;
  totalAmount: number;
  visibleAmount: number;
  onFilterToggle: (filter: TFilter) => void;
  onSearch: React.ChangeEventHandler;
  onSortingToggle: (sorting: TSorting) => void;
};

const FILTER_DICT = {
  [FILTER.CAPTION]: 'заголовку',
  [FILTER.HASHTAG]: 'хэштегу',
  [FILTER.URL]: 'URL-адресу',
} as const;

const SORTING_DICT = {
  [SORTING.NEW]: 'новые',
  [SORTING.OLD]: 'старые',
} as const;

const sortingGroupLabelId = 'sorting-group-label';

const getInputTipChar = (filterTarget: TFilter) => {
  switch (filterTarget) {
    case (FILTER.HASHTAG):
      return '#';

    case (FILTER.URL):
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
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={cn(style.root, className)}>
      <div className={style.filter}>
        <Select
          className={className}
          tip="Искать по:"
          dict={FILTER_DICT}
          value={filterTarget}
          onChange={onFilterToggle as (val: string) => void}
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
                  onSortingToggle(name as TSorting);
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
