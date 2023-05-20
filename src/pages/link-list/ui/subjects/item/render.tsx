import * as React from 'react';
import type { SeriesSubject, Subject } from '@/entities/subject';
import type { WithClassName } from '@/shared/ui';
import { SeriesSubjectsItem } from './self_series';
import { SingleSubjectsItem } from './self_single';

const isSeries = (subject: Subject): subject is SeriesSubject =>
  Boolean(subject.series);

type TSubjectRendererOptions = WithClassName & {
  subject: Subject;
};

export const renderSubjectsItem = (
  options: TSubjectRendererOptions,
): React.ReactNode => {
  const key = options.subject.caption;

  if (isSeries(options.subject)) {
    return (
      <SeriesSubjectsItem
        key={key}
        className={options.className}
        subject={options.subject}
      />
    );
  }

  return (
    <SingleSubjectsItem
      key={key}
      className={options.className}
      subject={options.subject}
    />
  );
};
