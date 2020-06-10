import React from 'react';

interface IProps {
  caption: string;
  lang: string;
  legend?: string;
  tags: string[];
  url: string;
}

function Subject(props: IProps): React.ReactNode {
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

export default Subject;
