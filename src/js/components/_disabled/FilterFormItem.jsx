import PropTypes from 'prop-types';
import React from 'react';

function FilterFormItem(props) {
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

FilterFormItem.propTypes = {
  isDefault: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterFormItem;
