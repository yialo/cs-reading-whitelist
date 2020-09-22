import React from 'react';
import classNames from 'classnames';

import { FILTERS, SORTING } from 'ts/constants';
import { Button, MainButton } from 'ts/components/Button';
import { TextInput } from 'ts/components/TextInput';
import type { FilterName, SortingName } from 'ts/types';

import { ControlBarAmountMeter as AmountMeter } from './AmountMeter';

import style from './style.scss';

interface IProps {
  className?: string;
  filterTarget: FilterName;
  searchString: string;
  sortingTarget: SortingName;
  totalAmount: number;
  visibleAmount: number;
  onFilterToggle: (name: FilterName) => void;
  onSearch: React.ChangeEventHandler;
  onSortingToggle: (name: SortingName) => void;
}

const FILTER_ENUM = {
  [FILTERS.CAPTION]: 'заголовок',
  [FILTERS.HASHTAG]: 'хэштег',
} as const;

const SORTING_ENUM = {
  [SORTING.NEW]: 'новые',
  [SORTING.OLD]: 'старые',
} as const;

const filterGroupLabelId = 'filter-group-label';
const sortingGroupLabelId = 'sorting-group-label';

export const ControlBar: React.FC<IProps> = ({
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
  return (
    <div className={classNames(style.root, className)}>
      <div className={style.filter}>
        <span className={style.tip} id={filterGroupLabelId}>
          Цель поиска:
        </span>
        <div
          className={style.filterControlGroup}
          aria-labelledby={filterGroupLabelId}
          role="radiogroup"
        >
          {Object.entries(FILTER_ENUM).map(([name, legend], i, arr) => {
            const isCurrent = (filterTarget === name);

            let buttonClassName;
            if (i === 0) {
              buttonClassName = style.filterControl_first;
            } else if (i === arr.length - 1) {
              buttonClassName = style.filterControl_last;
            } else {
              buttonClassName = style.filterControl;
            }

            return (
              <MainButton
                key={name}
                className={buttonClassName}
                disabled={isCurrent}
                aria-checked={isCurrent}
                role="radio"
                onClick={() => {
                  onFilterToggle(name as FilterName);
                }}
              >
                {legend}
              </MainButton>
            );
          })}
        </div>
      </div>
      <TextInput
        className={style.searchbar}
        inputMode="search"
        legend="Введите текст для поиска"
        tipChar={filterTarget === FILTERS.HASHTAG ? '#' : undefined}
        value={searchString}
        onChange={onSearch}
      />
      <div className={style.sorting}>
        <span className={style.tip} id={sortingGroupLabelId}>Сортировка:</span>
        <div
          className={style.sortingControls}
          aria-labelledby={sortingGroupLabelId}
          role="radiogroup"
        >
          {Object.entries(SORTING_ENUM).map(([name, legend]) => {
            const isCurrent = (name === sortingTarget);
            return (
              <Button
                key={name}
                className={style.sortingButton}
                disabled={isCurrent}
                aria-checked={isCurrent}
                role="radio"
                onClick={() => {
                  onSortingToggle(name);
                }}
              >
                {`Сначала ${legend}`}
              </Button>
            );
          })}
        </div>
      </div>
      <AmountMeter
        isFiltered={searchString !== ''}
        {...{
          totalAmount,
          visibleAmount,
        }}
      />
    </div>
  );
};

ControlBar.defaultProps = {
  className: '',
};
