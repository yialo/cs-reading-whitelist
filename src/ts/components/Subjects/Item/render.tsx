import React from 'react';

import type { ISubject } from 'ts/types';

import { SubjectsItemOfSeries as Series } from './self_Series';
import { SubjectsItemOfSingle as Single } from './self_Single';

export const renderSubjectsItem = (subject: ISubject): React.ReactNode => {
  if (subject.series) {
    return <Series key={subject.caption} subject={subject} />;
  }

  return <Single key={subject.caption} subject={subject} />;
};
