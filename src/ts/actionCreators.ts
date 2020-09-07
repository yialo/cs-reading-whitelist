import { ACTION_TYPES } from './constants';

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

export const toggleTheme: ActionCreatorType = () => ({
  type: ACTION_TYPES.THEME_TOGGLE,
});

export const fetchSubjects = () => {
  return async (dispatch: (action: IAction) => void): Promise<void> => {
    const apiUrl = `${process.env.PUBLIC_PATH}response/subjects.json?${Date.now()}`;
    try {
      const response = await window.fetch(apiUrl);
      const { data: list } = await response.json();
      dispatch({
        type: ACTION_TYPES.FETCH_COMPLETE,
        payload: list,
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPES.FETCH_ERROR,
        payload: err,
      });
    }
  };
};
