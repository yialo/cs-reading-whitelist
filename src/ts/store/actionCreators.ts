import type {
  FilterName,
  SortingName,
  ISubject,
} from 'ts/types';

import { ACTION_TYPES } from './actionTypes';
import type { SyncActionCreatorType } from './reducers';
import type { AsyncActionCreatorType } from './types';

export const searchInList: SyncActionCreatorType = (nextSearchString: string) => {
  return {
    type: ACTION_TYPES.LIST.SEARCH,
    payload: nextSearchString,
  };
};

export const toggleFilter: SyncActionCreatorType = (nextFilterName: FilterName) => ({
  type: ACTION_TYPES.LIST.FILTER_TOGGLE,
  payload: nextFilterName,
});


export const toggleSorting: SyncActionCreatorType = (nextSortingName: SortingName) => ({
  type: ACTION_TYPES.LIST.SORTING_TOGGLE,
  payload: nextSortingName,
});

export const showNextListPage: SyncActionCreatorType = () => ({
  type: ACTION_TYPES.LIST.NEXT_PAGE,
});

export const toggleTheme: SyncActionCreatorType = () => ({
  type: ACTION_TYPES.THEME.TOGGLE,
});

interface SubjectsApiResponse {
  data: ISubject[];
}

export const fetchSubjects: AsyncActionCreatorType = () => async (dispatch) => {
  const apiUrl = `${GLOBAL_ENV_VARIABLE_PUBLIC_PATH as string}response/subjects.json?${Date.now()}`;
  try {
    const response = await window.fetch(apiUrl);
    const { data: list } = await response.json() as SubjectsApiResponse;
    dispatch({
      type: ACTION_TYPES.FETCH.COMPLETE,
      payload: list,
    });
  } catch (err) {
    dispatch({
      type: ACTION_TYPES.FETCH.ERROR,
      payload: err as Error,
    });
  }
};
