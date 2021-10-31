import React from 'react';
import classNames from 'classnames';

import { SubjectLang, SubjectLegend, SubjectTag } from '@/types';

import style from './style.scss';

type TProps = {
  lang: SubjectLang | undefined;
  legend: SubjectLegend | undefined;
  tags: SubjectTag[] | undefined;
};

export const SubjectsItemAppendix: React.FC<TProps> = ({
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
