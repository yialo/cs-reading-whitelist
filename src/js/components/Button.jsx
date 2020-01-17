import React from 'react';

const Button = (props) => {
  const classNames = ['button'];

  if (props.classNames && props.classNames.length) {
    classNames.push(...props.classNames);
  }

  return (
    <button className={classNames.join(' ')} type={props.type}>{props.legend}</button>
  );
};

export default Button;
