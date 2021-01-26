import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import { Button } from 'common/c_button';
import { MainButton } from 'common/c_main-button';
import { TextInput } from 'common/c_text-input';
import { EFilter, ESorting } from 'ts/constants';
import type { TFilterName, TSortingName } from 'ts/types';

import { ControlBarAmountMeter } from './c_amount-meter';

import style from './style.scss';

interface IProps {
  className?: string;
  filterTarget: TFilterName;
  searchString: string;
  sortingTarget: TSortingName;
  totalAmount: number;
  visibleAmount: number;
  onFilterToggle: (name: TFilterName) => void;
  onSearch: React.ChangeEventHandler;
  onSortingToggle: (name: TSortingName) => void;
}

const FILTER_DICT = {
  [EFilter.CAPTION]: 'заголовок',
  [EFilter.HASHTAG]: 'хэштег',
} as const;

const SORTING_DICT = {
  [ESorting.NEW]: 'новые',
  [ESorting.OLD]: 'старые',
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
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
          {Object.entries(FILTER_DICT).map(([name, legend], i, arr) => {
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
                  onFilterToggle(name as TFilterName);
                }}
              >
                {legend}
              </MainButton>
            );
          })}
        </div>
      </div>

      <TextInput
        ref={inputRef}
        className={style.searchbar}
        inputMode="search"
        legend="Введите текст для поиска"
        tipChar={filterTarget === EFilter.HASHTAG ? '#' : undefined}
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
          {Object.entries(SORTING_DICT).map(([name, legend]) => {
            const isCurrent = (name === sortingTarget);
            return (
              <Button
                key={name}
                className={style.sortingButton}
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
