import { FILTERS, SORTING } from './constants';

export type $Values<O> = O[keyof O];

export type FilterName = $Values<typeof FILTERS>;
export type SortingName = $Values<typeof SORTING>;

export type SubjectCaption = string;
export type SubjectLang = string;
export type SubjectLegend = string;
export type SubjectUrl = string;
export type SubjectTag = string;

// TODO: add generic type for cases of lang in all series or in each item
export interface ISubjectSeriesItem {
  caption: SubjectCaption;
  lang?: SubjectLang;
  legend?: SubjectLegend;
  tags?: SubjectTag[];
  url: SubjectUrl;
}

interface IBaseSubject {
  caption: SubjectCaption;
  lang: SubjectLang;
  legend?: SubjectLegend;
  tags: SubjectTag[];
}

export interface ISingleSublect extends IBaseSubject {
  series?: undefined;
  url: SubjectUrl;
}

export interface ISeriesSubject extends IBaseSubject {
  series: ISubjectSeriesItem[];
  url?: undefined;
}

export type ISubject = ISingleSublect | ISeriesSubject;
