import PropTypes from 'prop-types';
import React from 'react';

function Subject(props) {
  const {
    caption,
    lang,
    legend,
    tags,
    url,
  } = props;
  return (
    <li className="subjects__item">
      <a className="subjects__link" href={url} lang={lang}>{caption}</a>
      {' '}
      <span className={`subjects__lang-badge subjects__lang-badge--${lang}`}>
        {lang}
      </span>
      <span className="subjects__legend">{legend ? ` - ${legend}` : ''}</span>
      <ul className="s_list subjects__tags">
        {tags.map((tag, i) => (
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
