import React from 'react';

export default function TextInput(props) {
  return (
    <label
      className={['text-input'].concat(props.classNames || []).join(' ')}
      aria-label={props.legend}
    >
      <input className="s_input text-input__field" type={props.type}/>
    </label>
  );
}
