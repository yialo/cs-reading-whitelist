import React from 'react';
import classNames from 'classnames';

import { ISubject } from 'ts/types';

import { SubjectsSingleItem } from './Single';

import style from './style.scss';

interface ISubjectsItemProps {
  subject: ISubject;
}

export const SubjectsItem: React.FC<ISubjectsItemProps> = ({ subject }) => {
  const {
    caption,
    lang,
    legend,
    series,
    tags,
    url,
  } = subject;

  return (
    <li className={style.root}>
      {
        series
          ? <span>Серия ссылок</span>
          : <SubjectsSingleItem {...{ caption, lang }} url={url as string} />
      }
      {' '}
      <span className={classNames(style[`langBadge_${lang}`])}>
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
