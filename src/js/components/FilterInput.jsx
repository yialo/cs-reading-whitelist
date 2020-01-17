import React from 'react';

const FilterInput = (props) => {
  const inputId = `${props.name}-${props.value}`;

  return (
    <label
      className="filter-form__item"
      htmlFor={inputId}
    >
      <input
        type="radio"
        name={props.name}
        value={props.value}
        id={inputId}
        defaultChecked={props.isDefault}
      />
      <span>{props.legend}</span>
    </label>
  );
};

export default FilterInput;
