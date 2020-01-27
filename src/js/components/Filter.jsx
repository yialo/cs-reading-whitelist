import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button.jsx';
import FilterInput from './FilterInput.jsx';
import TextInput from './TextInput.jsx';

function Filter(props) {
  return (
    <form className="filter-form page-content__filter">
      <fieldset className="filter-form__filter-set">
        <legend>Фильтрация:</legend>
        <div className="filter-form__wrapper">
          {props.list.map(([name, legend], i) => (
            <FilterInput
              key={`${i + 1}-${name}`}
              name="filter"
              value={name}
              legend={legend}
              isDefault={i === 0}
            />
          ))}
        </div>
      </fieldset>
      <p className="filter-form__searchbar">
        <TextInput
          classNames="filter__search-line"
          type="search"
          legend="Введите текст для поиска"
        />
        <Button
          classNames="filter-form__button"
          type="submit"
          legend="Найти"
        />
      </p>
    </form>
  );
}

Filter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
