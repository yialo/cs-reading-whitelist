import { ACTION_TYPES, FILTERS, SORTING } from './constants';

export type $Values<O> = O[keyof O];

export interface IAction {
  type: $Values<typeof ACTION_TYPES>;
  payload?: any;
}

export type FilterName = $Values<typeof FILTERS>;
export type SortingName = $Values<typeof SORTING>;

type Dispatch = (action: IAction) => void;
type StateGetter<RS> = () => RS;

type SyncActionCreator<RS> = (...args: any[]) => (
  | IAction
  | ((dispatch: Dispatch, getState: StateGetter<RS>) => void)
);
type AsyncActionCreator = (...args: any[]) => Promise<any>;

export type ActionCreatorGenericType<RS> = SyncActionCreator<RS> | AsyncActionCreator;

export type SubjectCaption = string;
export type SubjectLang = string;
export type SubjectLegend = string;
export type SubjectUrl = string;
export type SubjectTag = string;

export interface ISubjectSeriesItem {
  caption: SubjectCaption;
  legend?: SubjectLegend;
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

// TODO: remove in favor of native/React input element attributes type usage
export type InputModeType = (
  | 'decimal'
  | 'email'
  | 'none'
  | 'numeric'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | undefined
);
