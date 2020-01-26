import React from 'react';

export default function Button(props) {
  return (
    <button
      className={['s_button', 'button'].concat(props.classNames || []).join(' ')}
      type={props.type}
      onClick={props.onClick}
    >
      {props.legend}
    </button>
  );
}
