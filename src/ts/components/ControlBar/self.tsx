import React from 'react';
import classNames from 'classnames';

import { FILTERS, SORTING } from 'ts/constants';
import { TextInput } from 'ts/components/TextInput';
import type { FilterName, SortingName } from 'ts/types';

import style from './style.scss';

interface IProps {
  className?: string;
  filterTarget: FilterName;
  searchString: string;
  sortingTarget: SortingName;
  onFilterToggle: (name: FilterName) => void;
  onSearch: React.ChangeEventHandler;
  onSortingToggle: (name: SortingName) => void;
}

const FILTER_ENUM = {
  [FILTERS.CAPTION]: 'заголовок',
  [FILTERS.HASHTAG]: 'хэштег',
};

const SORTING_ENUM = {
  [SORTING.NEW]: 'новые',
  [SORTING.OLD]: 'старые',
};

const filterGroupLabelId = 'filter-group-label';
const sortingGroupLabelId = 'sorting-group-label';

export const ControlBar: React.FC<IProps> = (props) => {
  const {
    className,
    filterTarget,
    searchString,
    sortingTarget,
    onFilterToggle,
    onSearch,
    onSortingToggle,
  } = props;

  return (
    <form
      className={classNames(style.root, className)}
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <div className={style.filter}>
        <span className={style.tip}>
          <span id={filterGroupLabelId}>Цель поиска:</span>
        </span>
        <div
          className={style.filterControls}
          aria-labelledby={filterGroupLabelId}
          role="radiogroup"
        >
          {Object.entries(FILTER_ENUM).map(([name, legend]) => {
            const isCurrent = (filterTarget === name);
            return (
              <button
                key={name}
                className={style.control}
                disabled={isCurrent}
                type="button"
                aria-checked={isCurrent}
                role="radio"
                onClick={() => {
                  onFilterToggle(name);
                }}
              >
                {legend}
              </button>
            );
          })}
        </div>
      </div>
      <p className={style.searchbar}>
        <TextInput
          inputMode="search"
          legend="Введите текст для поиска"
          value={searchString}
          onChange={onSearch}
        />
      </p>
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
              <button
                key={name}
                className={style[isCurrent ? 'sortingButton_active' : 'sortingButton_inactive']}
                type="button"
                aria-checked={isCurrent}
                role="radio"
                onClick={() => {
                  onSortingToggle(name);
                }}
              >
                {`Сначала ${legend}`}
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
};

ControlBar.defaultProps = {
  className: '',
};
