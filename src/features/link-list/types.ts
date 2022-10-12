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
};

export type TSingleSublect = TBaseSubject & {
  series?: undefined;
  url: SubjectUrl;
  tags: SubjectTag[];
};

export type TSeriesSubject = TBaseSubject & {
  series: TSubjectSeriesItem[];
  url?: undefined;
  tags?: SubjectTag[];
};

export type TSubject = TSingleSublect | TSeriesSubject;