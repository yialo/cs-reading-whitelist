import type {
  FilterName,
  SortingName,
  ISubject,
} from 'ts/types';

import { ACTION_TYPES } from 'ts/action-types';

export const searchInList = (nextSearchString: string) => ({
  type: ACTION_TYPES.LIST.SEARCH,
  payload: nextSearchString,
});

export const toggleFilter = (nextFilterName: FilterName) => ({
  type: ACTION_TYPES.LIST.FILTER_TOGGLE,
  payload: nextFilterName,
});


export const toggleSorting = (nextSortingName: SortingName) => ({
  type: ACTION_TYPES.LIST.SORTING_TOGGLE,
  payload: nextSortingName,
});

export const showNextListPage = () => ({
  type: ACTION_TYPES.LIST.NEXT_PAGE,
});

export const toggleTheme = () => ({
  type: ACTION_TYPES.THEME.TOGGLE,
});

interface SubjectsApiResponse {
  data: ISubject[];
}

export const fetchSubjects = () => async (dispatch) => {
  const apiUrl = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}response/subjects.json?${Date.now()}`;

  try {
    const response = await window.fetch(apiUrl);
    const { data: list } = await response.json() as SubjectsApiResponse;

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
