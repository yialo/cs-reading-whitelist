import type { SeriesSubject, Subject } from '@/entities/subject';

export const isSeries = (subject: Subject): subject is SeriesSubject =>
  Boolean(subject.series);
