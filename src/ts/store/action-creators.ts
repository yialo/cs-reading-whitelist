import { ACTION_TYPES } from 'ts/action-types';
import type { TFilterName, TSearchString, TSortingName } from 'ts/types';

import type {
  TFetchActionCreator,
  TFetchList,
  TListFilterAction,
  TListPageAction,
  TListSearchAction,
  TListSortingAction,
  IThemeToggleAction,
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

export const toggleTheme = (): IThemeToggleAction => ({
  type: ACTION_TYPES.THEME.TOGGLE,
});

type TSubjectsApiResponse = {
  data: TFetchList;
};

export const fetchSubjects = (): TFetchActionCreator => async (dispatch) => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}data/subjects.json?${Date.now()}`;

  try {
    const response = await window.fetch(apiUrl);
    const { data: list } = await response.json() as TSubjectsApiResponse;

    dispatch({
      type: ACTION_TYPES.FETCH.COMPLETE,
      payload: list,
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.FETCH.ERROR,
      payload: error as Error,
    });
  }
};
