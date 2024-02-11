import * as React from 'react';
import { cn } from '@/shared/lib/cn';
import { Button, Select, TextInput } from '@/shared/ui';
import type { WithClassName } from '@/shared/ui';
import { FILTER, SORTING, type TFilter, type TSorting } from '../../config';
import { ControlBarAmountMeter } from './amount-meter';
import style from './style.scss';

interface Props extends WithClassName {
  filterTarget: TFilter;
  searchString: string;
  sortingTarget: TSorting;
  totalAmount: number;
  visibleAmount: number;
  onFilterToggle: (filter: TFilter) => void;
  onSearch: (value: string) => void;
  onSortingToggle: (sorting: TSorting) => void;
}

const FILTER_DICT = {
  [FILTER.CAPTION]: 'заголовку',
  [FILTER.HASHTAG]: 'хэштегу',
  [FILTER.URL]: 'URL-адресу',
} as const;

const SORTING_DICT = {
  [SORTING.NEW]: 'новые',
  [SORTING.OLD]: 'старые',
} as const;

const TIP_CHAR_DICT = {
  [FILTER.CAPTION]: 'abc',
  [FILTER.HASHTAG]: '#',
  [FILTER.URL]: '://',
} as const;

const sortingGroupLabelId = 'sorting-group-label';

export const ControlBar: React.FC<Props> = ({
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
        tipChar={TIP_CHAR_DICT[filterTarget]}
        value={searchString}
        onChange={onSearch}
      />

      <div className={style.sorting}>
        <span className={style.sorting__tip} id={sortingGroupLabelId}>
          Сортировка:
        </span>

        <div
          className={style.sorting__controls}
          aria-labelledby={sortingGroupLabelId}
          role="radiogroup"
        >
          {Object.entries(SORTING_DICT).map(([name, legend]) => {
            const isCurrent = name === sortingTarget;
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
