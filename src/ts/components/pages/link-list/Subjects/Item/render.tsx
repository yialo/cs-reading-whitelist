import React from 'react';

import type { ISubject, ISeriesSubject } from 'ts/types';

import { SeriesSubjectsItem as Series } from './self_Series';
import { SingleSubjectsItem as Single } from './self_Single';

const isSeries = (subject: ISubject): subject is ISeriesSubject => Boolean(subject.series);

export const renderSubjectsItem = (subject: ISubject): React.ReactNode => {
  const key = subject.caption;

  if (isSeries(subject)) {
    return <Series key={key} subject={subject} />;
  }

  return <Single key={key} subject={subject} />;
};
