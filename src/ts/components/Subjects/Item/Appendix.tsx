import React from 'react';
import classNames from 'classnames';

import type { SubjectLang, SubjectLegend, SubjectTag } from 'ts/types';

import { SubjectsItemTagList as TagList } from './TagList';

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
      <TagList tags={tags} />
    </>
  );
};
