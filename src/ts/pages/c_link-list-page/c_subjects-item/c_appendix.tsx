import React from 'react';
import classNames from 'classnames';

import type { SubjectLang, SubjectLegend, SubjectTag } from 'ts/types';

import style from './style.scss';

interface ISubjectsItemAppendixProps {
  lang?: SubjectLang;
  legend?: SubjectLegend;
  tags?: SubjectTag[];
}

export const SubjectsItemAppendix: React.FC<ISubjectsItemAppendixProps> = ({
  lang = '',
  legend = '',
  tags = [],
}) => {
  return (
    <>
      {Boolean(lang) && (
        <>
          {' '}
          <span className={classNames(style[`langBadge_${lang}`])}>
            {lang}
          </span>
        </>
      )}
      {tags.length > 0 && (
        <ul className={style.tags}>
          {tags.map((tag, i) => {
            if (!tag) {
              return null;
            }

            return (
              <li className={style.tag} key={i}>
                {` #${tag}`}
              </li>
            );
          })}
        </ul>
      )}
      {Boolean(legend) && (
        <span className={style.legend}>{` ‒ ${legend}`}</span>
      )}
    </>
  );
};

SubjectsItemAppendix.displayName = 'SubjectsItem-Appendix';
