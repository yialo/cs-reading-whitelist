import React from 'react';

import TextInput from './TextInput';

interface IProps {
  filterTarget: string;
  onFilterToggle: (name: string) => void;
  onSearch: (evt: React.SyntheticEvent) => void;
  searchString: string;
}

const filterDict = {
  'caption': 'заголовок',
  'hashtag': 'хэштег',
};

const ControlBar: React.FC<IProps> = (props) => {
  const {
    filterTarget,
    onFilterToggle,
    onSearch,
    searchString,
  } = props;

  return (
    <form
      className="control-bar page__filter"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <div className="filter control-bar__filter">
        <p className="filter__tip">
          <span id="filter-group-label">Тип сортировки</span>
          :
        </p>
        <div className="filter__controls" role="radiogroup" aria-labelledby="filter-group-label">
          {Object.entries(filterDict).map(([name, legend], i) => {
            const isCurrent = (filterTarget === name);
            return (
              <button
                key={`${name}-${i + 1}`}
                className="s_button filter__control"
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
      <p className="control-bar__searchbar">
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

export default ControlBar;
