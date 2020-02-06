import PropTypes from 'prop-types';
import React from 'react';

import TextInput from './TextInput.jsx';

const filterDict = {
  'caption': 'по заголовку',
  'hash': 'по хэштегу',
};

function ControlBar(props) {
  return (
    <form className="control-bar page-content__filter">
      <div className="filter control-bar__filter">
        <p className="filter__tip">Сортировать:</p>
        {Object.entries(filterDict).map(([name, legend], i) => {
          const isCurrent = (props.filterTarget === name);

          return (
            <button
              className={`s_button filter__control${isCurrent ? ' js_active' : ''}`}
              key={`${name}-${i + 1}`}
              type="button"
              onClick={isCurrent ? null : () => {
                props.onFilterToggle(name);
              }}
            >
              {legend}
            </button>
          );
        })}
      </div>
      <p className="control-bar__searchbar">
        <TextInput
          onChange={props.onSearch}
          type="search"
          legend="Введите текст для поиска"
          value={props.searchString}
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
