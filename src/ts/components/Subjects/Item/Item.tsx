import React from 'react';
import classNames from 'classnames';

import { ISubject } from 'ts/types';

import style from './style.scss';

interface IProps extends ISubject {
  className?: string;
}

export const SubjectsItem: React.FC<IProps> = (props) => {
  const {
    caption,
    className,
    lang,
    legend,
    tags,
    url,
  } = props;

  return (
    <li className={classNames(style.root, className)}>
      <a className={style.link} href={url} lang={lang}>{caption}</a>
      {' '}
      <span className={`subjects__lang-badge subjects__lang-badge--${lang}`}>
        {lang}
      </span>
      <span className={style.legend}>{legend ? ` - ${legend}` : ''}</span>
      <ul className={style.tags}>
        {tags.map((tag, i) => (
          <li className={style.tag} key={i}>
            {` #${tag}`}
          </li>
        ))}
      </ul>
    </li>
  );
};

SubjectsItem.defaultProps = {
  className: '',
  legend: '',
  tags: [],
};
