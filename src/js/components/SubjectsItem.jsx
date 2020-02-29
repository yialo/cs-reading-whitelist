import PropTypes from 'prop-types';
import React from 'react';

// TODO: add 'lang' attribute to 'a' element
function SubjectsItem(props) {
  return (
    <li className="subjects__item">
      <a className="subjects__link" href={props.url}>{props.caption}</a>
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

SubjectsItem.defaultProps = {
  legend: '',
  tags: [],
};

SubjectsItem.propTypes = {
  caption: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  legend: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

export default SubjectsItem;
