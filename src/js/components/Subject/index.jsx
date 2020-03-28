import PropTypes from 'prop-types';
import React from 'react';

function Subject(props) {
  return (
    <li className="subjects__item">
      <a className="subjects__link" href={props.url} lang={props.lang}>{props.caption}</a>
      {' '}
      <span className={`subjects__lang-badge subjects__lang-badge--${props.lang}`}>
        {props.lang}
      </span>
      {props.legend ? ` - ${props.legend}` : ''}
      <ul className="s_list subjects__tags">
        {props.tags.map((tag, i) => (
          <li className="subjects__tag" key={i}>
            {` #${tag}`}
          </li>
        ))}
      </ul>
    </li>
  );
}

Subject.defaultProps = {
  legend: '',
  tags: [],
};

Subject.propTypes = {
  caption: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  legend: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

export default Subject;
