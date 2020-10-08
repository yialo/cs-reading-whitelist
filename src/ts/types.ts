import type { AnyAction } from 'redux';

import { ACTION_TYPES, FILTERS, SORTING } from './constants';

export type $Values<O> = O[keyof O];

export interface IAction extends AnyAction {
  type: $Values<typeof ACTION_TYPES>;
  payload?: any;
}

export type FilterName = $Values<typeof FILTERS>;
export type SortingName = $Values<typeof SORTING>;

type Dispatch = (action: IAction) => void;
type StateGetter<RS> = () => RS;

export type SyncActionCreatorGenericType<RS> = (...args: any[]) => (
  | IAction
  | ((dispatch: Dispatch, getState: StateGetter<RS>) => void)
);

type AsyncAction = (dispatch: Dispatch) => Promise<void>;
export type AsyncActionCreatorType = (...args: any[]) => AsyncAction;

export type SubjectCaption = string;
export type SubjectLang = string;
export type SubjectLegend = string;
export type SubjectUrl = string;
export type SubjectTag = string;

export interface ISubjectSeriesItem {
  caption: SubjectCaption;
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
