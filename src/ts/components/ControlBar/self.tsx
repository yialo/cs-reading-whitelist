import React from 'react';
import classNames from 'classnames';

import { FILTERS } from 'ts/constants';
import { TextInput } from 'ts/components/TextInput';

import style from './style.scss';

interface IProps {
  className?: string;
  filterTarget: string;
  searchString: string;
  onFilterToggle: (name: string) => void;
  onSearch: React.ChangeEventHandler;
}

const filterDict = {
  [FILTERS.CAPTION]: 'заголовок',
  [FILTERS.HASHTAG]: 'хэштег',
};

const filterGroupLabelId = 'filter-group-label';

export const ControlBar: React.FC<IProps> = (props) => {
  const {
    className,
    filterTarget,
    searchString,
    onFilterToggle,
    onSearch,
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
        <div className={style.controls} role="radiogroup" aria-labelledby={filterGroupLabelId}>
          {Object.entries(filterDict).map(([name, legend], i) => {
            const isCurrent = (filterTarget === name);
            return (
              <button
                key={`${name}-${i + 1}`}
                className={style.control}
                disabled={isCurrent}
                role="radio"
                aria-checked={isCurrent}
                type="button"
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
    </form>
  );
};

ControlBar.defaultProps = {
  className: '',
};
