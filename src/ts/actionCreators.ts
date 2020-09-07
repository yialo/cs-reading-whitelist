import { ACTION_TYPES } from './constants';
import type { ISubject } from './types';

import {
  IAction,
  ActionCreatorType,
  FilterName,
  SortingName,
} from './types';

export const searchInList: ActionCreatorType = (nextSearchString: string) => ({
  type: ACTION_TYPES.LIST_SEARCH,
  payload: nextSearchString,
});

export const toggleFilter: ActionCreatorType = (nextFilterName: FilterName) => ({
  type: ACTION_TYPES.LIST_FILTER_TOGGLE,
  payload: nextFilterName,
});

export const toggleSorting: ActionCreatorType = (nextSortingName: SortingName) => ({
  type: ACTION_TYPES.LIST_SORTING_TOGGLE,
  payload: nextSortingName,
});

export const showNextListPage: ActionCreatorType = () => ({
  type: ACTION_TYPES.LIST_NEXT_PAGE,
});

export const toggleTheme: ActionCreatorType = () => ({
  type: ACTION_TYPES.THEME_TOGGLE,
});

interface SubjectsApiResponse {
  data: ISubject[];
}

export const fetchSubjects = () => {
  return async (dispatch: (action: IAction) => void): Promise<void> => {
    const apiUrl = `${process.env.PUBLIC_PATH as string}response/subjects.json?${Date.now()}`;
    try {
      const response = await window.fetch(apiUrl);
      const { data: list } = await response.json() as SubjectsApiResponse;
      dispatch({
        type: ACTION_TYPES.FETCH_COMPLETE,
        payload: list.slice(0, 22),
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPES.FETCH_ERROR,
        payload: err as Error,
      });
    }
  };
};
