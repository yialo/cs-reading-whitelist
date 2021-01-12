import React from 'react';

import type { ISubject, ISeriesSubject } from 'ts/types';

import { SeriesSubjectsItem } from './self_series';
import { SingleSubjectsItem } from './self_single';
import type { IClassNameable } from './types';

const isSeries = (subject: ISubject): subject is ISeriesSubject => Boolean(subject.series);

interface ISubjectRendererOptions extends IClassNameable {
  subject: ISubject;
}

export const renderSubjectsItem = (options: ISubjectRendererOptions): React.ReactNode => {
  const key = options.subject.caption;

  if (isSeries(options.subject)) {
    return <SeriesSubjectsItem key={key} className={options.className} subject={options.subject} />;
  }

  return <SingleSubjectsItem key={key} className={options.className} subject={options.subject} />;
};
