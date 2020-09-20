import React from 'react';
import classNames from 'classnames';

import type { SubjectLang, SubjectLegend, SubjectTag } from 'ts/types';

import style from './style.scss';

interface IProps {
  lang: SubjectLang;
  legend?: SubjectLegend;
  tags: SubjectTag[];
}

export const SubjectsItemAppendix: React.FC<IProps> = ({
  lang,
  legend,
  tags,
}) => {
  return (
    <>
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
    </>
  );
};
