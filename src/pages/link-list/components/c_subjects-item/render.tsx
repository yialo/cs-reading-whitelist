import * as React from 'react';

import type { TClassNameable } from '@/types/common';

import type { Subject, SeriesSubject } from '@/entities/subject';

import { SeriesSubjectsItem } from './self_series';
import { SingleSubjectsItem } from './self_single';

const isSeries = (subject: Subject): subject is SeriesSubject => Boolean(subject.series);

type TSubjectRendererOptions = TClassNameable & {
  subject: Subject;
};

export const renderSubjectsItem = (options: TSubjectRendererOptions): React.ReactNode => {
  const key = options.subject.caption;

  if (isSeries(options.subject)) {
    return <SeriesSubjectsItem key={key} className={options.className} subject={options.subject} />;
  }

  return <SingleSubjectsItem key={key} className={options.className} subject={options.subject} />;
};
