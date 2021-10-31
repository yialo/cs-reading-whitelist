import { Reducer } from 'redux';

import { TAction } from '@/types/redux';

import { TFilter, TSorting } from '../enums';
import { TSubject } from '../types';
import { ACTION_TYPE } from './action-types';

export type TLinkListState = {
  list: TSubject[];
  error: Error | null;
  isComplete: boolean;
  searchString: string;
  filterName: TFilter;
  sortingName: TSorting;
  page: number;
};

export type TFetchStartAction = TAction<typeof ACTION_TYPE.FETCH_START>;
type TFetchCompleteAction = TAction<typeof ACTION_TYPE.FETCH_SUCCESS, TSubject[]>;
type TFetchFailureAction = TAction<typeof ACTION_TYPE.FETCH_FAILURE, Error>;

export type TSearchAction = TAction<typeof ACTION_TYPE.SEARCH, string>;
export type TFilterAction = TAction<typeof ACTION_TYPE.FILTER, TFilter>;
export type TSortingAction = TAction<typeof ACTION_TYPE.SORTING, TSorting>;
export type TPageAction = TAction<typeof ACTION_TYPE.NEXT_PAGE>;

type TLinkListAction = (
  | TFetchStartAction
  | TFetchCompleteAction
  | TFetchFailureAction
  | TSearchAction
  | TFilterAction
  | TSortingAction
  | TPageAction
);

export type TLinkListReducer = Reducer<TLinkListState, TLinkListAction>;
