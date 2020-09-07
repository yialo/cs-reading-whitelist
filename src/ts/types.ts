import { ACTION_TYPES, FILTERS, SORTING } from './constants';

export type $Values<O> = O[keyof O];

export interface IAction {
  type: $Values<typeof ACTION_TYPES>;
  payload?: any;
}

export type FilterName = $Values<typeof FILTERS>;
export type SortingName = $Values<typeof SORTING>;

type SyncActionCreator = (...args: any[]) => IAction;
type AsyncActionCreator = (...args: any[]) => Promise<any>;

export type ActionCreatorType = SyncActionCreator | AsyncActionCreator;

export interface ISubject {
  caption: string;
  lang: string;
  legend?: string;
  tags: string[];
  url: string;
}

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
