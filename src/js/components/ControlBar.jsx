import PropTypes from 'prop-types';
import React from 'react';

import TextInput from './TextInput.jsx';

function ControlBar(props) {
  return (
    <form className="control-bar page-content__filter">
      <p className="control-bar__searchbar">
        <TextInput
          classNames="filter__search-line"
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
  onSearch: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
};

export default ControlBar;
