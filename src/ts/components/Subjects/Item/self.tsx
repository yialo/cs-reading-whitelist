import React from 'react';

import type { ISubject, ISeriesSubject } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';
import { SubjectsItemOfSeries as Series } from './self_Series';

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

  if (series) {
    return <Series subject={subject as ISeriesSubject} />;
  }

  return (
    <li className={style.root}>
      <a className={style.link} href={url} lang={lang}>{caption}</a>
      <Appendix {...{ lang, legend, tags }} />
    </li>
  );
};
