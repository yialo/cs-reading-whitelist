import { TFilterName, TSearchString, TSortingName } from 'ts/types';

import { ACTION_TYPES } from './action-types';
import {
  TListFilterAction,
  TListPageAction,
  TListSearchAction,
  TListSortingAction,
} from './types';

export const searchInList = (nextSearchString: TSearchString): TListSearchAction => ({
  type: ACTION_TYPES.LIST.SEARCH,
  payload: nextSearchString,
});

export const toggleFilter = (nextFilterName: TFilterName): TListFilterAction => ({
  type: ACTION_TYPES.LIST.FILTER_TOGGLE,
  payload: nextFilterName,
});

export const toggleSorting = (nextSortingName: TSortingName): TListSortingAction => ({
  type: ACTION_TYPES.LIST.SORTING_TOGGLE,
  payload: nextSortingName,
});

export const showNextListPage = (): TListPageAction => ({
  type: ACTION_TYPES.LIST.NEXT_PAGE,
});

export const fetchSubjects = () => ({ type: ACTION_TYPES.FETCH.START });
