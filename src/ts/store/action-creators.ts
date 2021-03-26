import { ACTION_TYPES } from 'ts/action-types';
import type { TFilterName, TSearchString, TSortingName } from 'ts/types';

import type {
  TFetchActionCreator,
  TFetchList,
  IListFilterAction,
  IListPageAction,
  IListSearchAction,
  IListSortingAction,
  IThemeToggleAction,
} from './types';

export const searchInList = (nextSearchString: TSearchString): IListSearchAction => ({
  type: ACTION_TYPES.LIST.SEARCH,
  payload: nextSearchString,
});

export const toggleFilter = (nextFilterName: TFilterName): IListFilterAction => ({
  type: ACTION_TYPES.LIST.FILTER_TOGGLE,
  payload: nextFilterName,
});

export const toggleSorting = (nextSortingName: TSortingName): IListSortingAction => ({
  type: ACTION_TYPES.LIST.SORTING_TOGGLE,
  payload: nextSortingName,
});

export const showNextListPage = (): IListPageAction => ({
  type: ACTION_TYPES.LIST.NEXT_PAGE,
});

export const toggleTheme = (): IThemeToggleAction => ({
  type: ACTION_TYPES.THEME.TOGGLE,
});

interface ISubjectsApiResponse {
  data: TFetchList;
}

export const fetchSubjects = (): TFetchActionCreator => async (dispatch) => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}response/subjects.json?${Date.now()}`;

  try {
    const response = await window.fetch(apiUrl);
    const { data: list } = await response.json() as ISubjectsApiResponse;

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
