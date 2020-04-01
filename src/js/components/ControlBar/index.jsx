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
    <form className="control-bar page-content__filter">
      <div className="filter control-bar__filter">
        <p className="filter__tip">Тип сортировки:</p>
        <div className="filter__controls">
          {Object.entries(filterDict).map(([name, legend], i) => {
            const isCurrent = (filterTarget === name);
            return (
              <button
                className={`s_button filter__control${isCurrent ? ' js_active' : ''}`}
                key={`${name}-${i + 1}`}
                type="button"
                onClick={isCurrent ? null : () => {
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
          onChange={onSearch}
          type="search"
          legend="Введите текст для поиска"
          value={searchString}
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
