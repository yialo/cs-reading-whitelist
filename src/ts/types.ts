import type { EFilter, ESorting } from './constants';

export type $Values<O> = O[keyof O];

export type TFilterName = EFilter;
export type TSortingName = ESorting;
export type TSearchString = string;

export type SubjectCaption = string;
export type SubjectLang = string;
export type SubjectLegend = string;
export type SubjectUrl = string;
export type SubjectTag = string;

// TODO: add generic type for cases of lang in all series or in each item
export type TSubjectSeriesItem = {
  caption: SubjectCaption;
  lang?: SubjectLang;
  legend?: SubjectLegend;
  tags?: SubjectTag[];
  url: SubjectUrl;
};

type TBaseSubject = {
  caption: SubjectCaption;
  lang: SubjectLang;
  legend?: SubjectLegend;
  tags: SubjectTag[];
};

export type TSingleSublect = TBaseSubject & {
  series?: undefined;
  url: SubjectUrl;
};

export type TSeriesSubject = TBaseSubject & {
  series: TSubjectSeriesItem[];
  url?: undefined;
};

export type ISubject = TSingleSublect | TSeriesSubject;

export type TClassNameable = {
  className?: string;
};
