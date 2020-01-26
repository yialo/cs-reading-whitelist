import React from 'react';

export default function Subject(props) {
  return (
    <li className="subjects__item">
      <a href={props.url}>{props.caption}</a>
      {props.legend ? ` - ${props.legend}` : ''}
      <ul className="s_list subjects__tags">
        {props.tags.map((tag, i) => (
          <li className="subjects__tag" key={i}> #{tag}</li>
        ))}
      </ul>
    </li>
  );
}
