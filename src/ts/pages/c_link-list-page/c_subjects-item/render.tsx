import React from 'react';

import type { TClassNameable, ISubject, TSeriesSubject } from 'ts/types';

import { SeriesSubjectsItem } from './self_series';
import { SingleSubjectsItem } from './self_single';

const isSeries = (subject: ISubject): subject is TSeriesSubject => Boolean(subject.series);

type TSubjectRendererOptions = TClassNameable & {
  subject: ISubject;
};

export const renderSubjectsItem = (options: TSubjectRendererOptions): React.ReactNode => {
  const key = options.subject.caption;

  if (isSeries(options.subject)) {
    return <SeriesSubjectsItem key={key} className={options.className} subject={options.subject} />;
  }

  return <SingleSubjectsItem key={key} className={options.className} subject={options.subject} />;
};
