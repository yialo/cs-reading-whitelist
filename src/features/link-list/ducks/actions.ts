import type { TFilter, TSorting } from '../enums';

import { ACTION_TYPE } from './action-types';
import type {
  TFetchStartAction,
  TFilterAction,
  TPageAction,
  TSearchAction,
  TSortingAction,
} from './types';

export const searchInList = (nextSearchString: string): TSearchAction => ({
  type: ACTION_TYPE.SEARCH,
  payload: nextSearchString,
});

export const toggleFilter = (nextFilterName: TFilter): TFilterAction => ({
  type: ACTION_TYPE.FILTER,
  payload: nextFilterName,
});

export const toggleSorting = (nextSortingName: TSorting): TSortingAction => ({
  type: ACTION_TYPE.SORTING,
  payload: nextSortingName,
});

export const showNextListPage = (): TPageAction => ({
  type: ACTION_TYPE.NEXT_PAGE,
});

export const fetchSubjects = (): TFetchStartAction => ({
  type: ACTION_TYPE.FETCH_START,
});
