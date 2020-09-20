import React from 'react';

import type { ISingleSublect } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';

import style from './style.scss';

interface ISubjectsItemOfSingleProps {
  subject: ISingleSublect;
}

export const SubjectsItemOfSingle: React.FC<ISubjectsItemOfSingleProps> = ({ subject }) => {
  const {
    caption,
    lang,
    legend,
    tags,
    url,
  } = subject;

  return (
    <li className={style.root}>
      <a className={style.link} href={url} lang={lang}>{caption}</a>
      <Appendix {...{ lang, legend, tags }} />
    </li>
  );
};

SubjectsItemOfSingle.displayName = 'SubjectsItem_single';
