import React from 'react';

import type { ISubject, ISeriesSubject } from 'ts/types';

import { SeriesSubjectsItem as Series } from './self_Series';
import { SingleSubjectsItem as Single } from './self_Single';
import type { IClassNameable } from './types';

const isSeries = (subject: ISubject): subject is ISeriesSubject => Boolean(subject.series);

interface ISubjectRendererOptions extends IClassNameable {
  subject: ISubject;
}

export const renderSubjectsItem = (options: ISubjectRendererOptions): React.ReactNode => {
  const key = options.subject.caption;

  if (isSeries(options.subject)) {
    return <Series key={key} className={options.className} subject={options.subject} />;
  }

  return <Single key={key} className={options.className} subject={options.subject} />;
};
