import type { Action, Reducer } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import type { ACTION_TYPES } from 'ts/action-types';
import type { TFilterName, TSearchString, TSortingName, ISubject } from 'ts/types';

export type TFetchList = ISubject[];

export interface IFetchState {
  error: Error | null;
  list: TFetchList;
  isComplete: boolean;
}

export interface IListState {
  searchString: TSearchString;
  page: number;
  filterName: TFilterName;
  sortingName: TSortingName;
}

export interface IThemeState {
  isDark: boolean;
}

export interface IState {
  fetch: IFetchState;
  list: IListState;
  theme: IThemeState;
}

interface IFetchCompleteAction extends Action<typeof ACTION_TYPES.FETCH.COMPLETE> {
  payload: TFetchList;
}

interface IFetchErrorAction extends Action<typeof ACTION_TYPES.FETCH.ERROR> {
  payload: Error;
}

type TFetchAction = IFetchCompleteAction | IFetchErrorAction;

export type TFetchReducer = Reducer<IFetchState, TFetchAction>;

export type TFetchActionCreator = ThunkAction<Promise<void>, IState, undefined, TFetchAction>;

export type IThemeToggleAction = Action<typeof ACTION_TYPES.THEME.TOGGLE>;

export type TThemeReducer = Reducer<IThemeState, IThemeToggleAction>;

export interface IListSearchAction extends Action<typeof ACTION_TYPES.LIST.SEARCH> {
  payload: TSearchString;
}

export interface IListFilterAction extends Action<typeof ACTION_TYPES.LIST.FILTER_TOGGLE> {
  payload: TFilterName;
}

export interface IListSortingAction extends Action<typeof ACTION_TYPES.LIST.SORTING_TOGGLE> {
  payload: TSortingName;
}

export interface IListPageAction extends Action<typeof ACTION_TYPES.LIST.NEXT_PAGE> {
  payload?: undefined;
}

type TListAction = (
  | IListFilterAction
  | IListSearchAction
  | IListSortingAction
  | IListPageAction
);

export type TListReducer = Reducer<IListState, TListAction>;
