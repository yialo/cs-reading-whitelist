import { ACTION_TYPES } from './constants';
import type { SyncActionCreatorType } from './reducers';

import type {
  AsyncActionCreatorType,
  FilterName,
  SortingName,
  ISubject,
} from './types';

export const searchInList: SyncActionCreatorType = (nextSearchString: string) => {
  return {
    type: ACTION_TYPES.LIST_SEARCH,
    payload: nextSearchString,
  };
};

export const toggleFilter: SyncActionCreatorType = (nextFilterName: FilterName) => ({
  type: ACTION_TYPES.LIST_FILTER_TOGGLE,
  payload: nextFilterName,
});


export const toggleSorting: SyncActionCreatorType = (nextSortingName: SortingName) => ({
  type: ACTION_TYPES.LIST_SORTING_TOGGLE,
  payload: nextSortingName,
});

export const showNextListPage: SyncActionCreatorType = () => ({
  type: ACTION_TYPES.LIST_NEXT_PAGE,
});

export const toggleTheme: SyncActionCreatorType = () => ({
  type: ACTION_TYPES.THEME_TOGGLE,
});

interface SubjectsApiResponse {
  data: ISubject[];
}

export const fetchSubjects: AsyncActionCreatorType = () => async (dispatch) => {
  const apiUrl = `${process.env.PUBLIC_PATH as string}response/subjects.json?${Date.now()}`;
  try {
    const response = await window.fetch(apiUrl);
    const { data: list } = await response.json() as SubjectsApiResponse;
    dispatch({
      type: ACTION_TYPES.FETCH_COMPLETE,
      payload: list,
    });
  } catch (err) {
    dispatch({
      type: ACTION_TYPES.FETCH_ERROR,
      payload: err as Error,
    });
  }
};
