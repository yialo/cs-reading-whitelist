import type { Action, Reducer } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import type { ACTION_TYPES } from 'ts/action-types';
import type { TFilterName, TSearchString, TSortingName, ISubject } from 'ts/types';

export type TFetchList = ISubject[];

export type TFetchState = {
  error: Error | null;
  list: TFetchList;
  isComplete: boolean;
};

export type TListState = {
  searchString: TSearchString;
  page: number;
  filterName: TFilterName;
  sortingName: TSortingName;
};

export type TState = {
  fetch: TFetchState;
  list: TListState;
};

type TFetchCompleteAction = Action<typeof ACTION_TYPES.FETCH.COMPLETE> & {
  payload: TFetchList;
};

type TFetchErrorAction = Action<typeof ACTION_TYPES.FETCH.ERROR> & {
  payload: Error;
};

type TFetchAction = TFetchCompleteAction | TFetchErrorAction;

export type TFetchReducer = Reducer<TFetchState, TFetchAction>;

export type TFetchActionCreator = ThunkAction<Promise<void>, TState, undefined, TFetchAction>;

export type TListSearchAction = Action<typeof ACTION_TYPES.LIST.SEARCH> & {
  payload: TSearchString;
};

export type TListFilterAction = Action<typeof ACTION_TYPES.LIST.FILTER_TOGGLE> & {
  payload: TFilterName;
};

export type TListSortingAction = Action<typeof ACTION_TYPES.LIST.SORTING_TOGGLE> & {
  payload: TSortingName;
};

export type TListPageAction = Action<typeof ACTION_TYPES.LIST.NEXT_PAGE> & {
  payload?: undefined;
};

type TListAction = (
  | TListFilterAction
  | TListSearchAction
  | TListSortingAction
  | TListPageAction
);

export type TListReducer = Reducer<TListState, TListAction>;
