import React from 'react';

const TextInput = (props) => {
  const labelClassNames = ['text-input'];

  if (props.classNames && props.classNames.length) {
    labelClassNames.push(...props.classNames);
  }

  return (
    <label
      className={labelClassNames.join(' ')}
      aria-label={props.legend}
    >
      <input className="text-input__field" type={props.type}/>
    </label>
  );
};

export default TextInput;
