import React from 'react';

import type { ISubject, ISingleSublect, ISeriesSubject } from 'ts/types';

import { SeriesSubjectsItem as Series } from './self_Series';
import { SingleSubjectsItem as Single } from './self_Single';

interface ISingleSublectAttrs<S> {
  key: string;
  subject: S;
}

export const renderSubjectsItem = (subject: ISubject): React.ReactNode => {
  const attrs = {
    key: subject.caption,
    subject,
  };

  if (subject.series) {
    return <Series {...attrs as ISingleSublectAttrs<ISeriesSubject>} />;
  }

  return <Single {...attrs as ISingleSublectAttrs<ISingleSublect>} />;
};
