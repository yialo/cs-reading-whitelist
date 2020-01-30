import PropTypes from 'prop-types';
import React from 'react';

// TODO: add 'lang' indicator
function SubjectsItem(props) {
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

SubjectsItem.propTypes = {
  caption: PropTypes.string.isRequired,
  legend: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

export default SubjectsItem;
