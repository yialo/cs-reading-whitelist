import type { Reducer } from 'redux';
import type { Subject } from '@/entities/subject';
import type { TProcess } from '@/shared/config';
import type { TAction } from '@/types/redux';
import type { TFilter, TSorting } from '../enums';
import type { ACTION_TYPE } from './action-types';

export type TLinkListState = {
  list: Subject[];
  error: Error | null;
  process: TProcess;
  searchString: string;
  filter: TFilter;
  sorting: TSorting;
  page: number;
};

export type TFetchStartAction = TAction<typeof ACTION_TYPE.FETCH_START>;
type TFetchCompleteAction = TAction<
  typeof ACTION_TYPE.FETCH_SUCCESS,
  Subject[]
>;
type TFetchFailureAction = TAction<typeof ACTION_TYPE.FETCH_FAILURE, Error>;

export type TSearchAction = TAction<typeof ACTION_TYPE.SEARCH, string>;
export type TFilterAction = TAction<typeof ACTION_TYPE.FILTER, TFilter>;
export type TSortingAction = TAction<typeof ACTION_TYPE.SORTING, TSorting>;
export type TPageAction = TAction<typeof ACTION_TYPE.NEXT_PAGE>;

type TLinkListAction =
  | TFetchStartAction
  | TFetchCompleteAction
  | TFetchFailureAction
  | TSearchAction
  | TFilterAction
  | TSortingAction
  | TPageAction;

export type TLinkListReducer = Reducer<TLinkListState, TLinkListAction>;
