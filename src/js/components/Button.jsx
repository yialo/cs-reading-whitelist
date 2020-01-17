import React from 'react';

const Button = (props) => {
  const classNames = ['s_button', 'button'];

  if (props.classNames && props.classNames.length) {
    classNames.push(...props.classNames);
  }

  return (
    <button
      className={classNames.join(' ')}
      type={props.type}
      onClick={props.onClick}
    >
      {props.legend}
    </button>
  );
};

export default Button;
