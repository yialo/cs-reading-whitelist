interface SubjectBase {
  caption: string;
  lang: 'en' | 'ru';
  legend?: string;
}

export interface SingleSublect extends SubjectBase {
  series?: undefined;
  url: string;
  tags: string[];
}

// TODO: add generic type for cases of lang in all series or in each item
export interface SubjectSeriesItem {
  caption: string;
  lang?: 'en' | 'ru';
  legend?: string;
  tags?: string[];
  url: string;
}

export interface SeriesSubject extends SubjectBase {
  series: SubjectSeriesItem[];
  url?: undefined;
  tags?: string[];
}

export type Subject = SingleSublect | SeriesSubject;
