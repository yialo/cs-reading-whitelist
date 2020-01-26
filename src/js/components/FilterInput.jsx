import React from 'react';

export default function FilterInput(props) {
  const inputId = `${props.name}-${props.value}`;

  return (
    <label
      className="filter-form__item"
      htmlFor={inputId}
    >
      <input
        className="filter-form__field"
        type="radio"
        name={props.name}
        value={props.value}
        id={inputId}
        defaultChecked={props.isDefault}
      />
      <span>{props.legend}</span>
    </label>
  );
}
