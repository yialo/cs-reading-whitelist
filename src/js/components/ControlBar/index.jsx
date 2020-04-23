import PropTypes from 'prop-types';
import React from 'react';

import TextInput from '../TextInput/index.jsx';

const filterDict = {
  'caption': 'заголовок',
  'hashtag': 'хэштег',
};

function ControlBar(props) {
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
        <p className="filter__tip">Тип сортировки:</p>
        <div className="filter__controls">
          {Object.entries(filterDict).map(([name, legend], i) => {
            const isCurrent = (filterTarget === name);
            return (
              <button
                key={`${name}-${i + 1}`}
                className="s_button filter__control"
                disabled={isCurrent}
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
}

ControlBar.propTypes = {
  filterTarget: PropTypes.string.isRequired,
  onFilterToggle: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
};

export default ControlBar;
