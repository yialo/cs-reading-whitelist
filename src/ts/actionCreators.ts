import { ACTION_TYPES } from './constants';
import type { RootState } from './reducers';

import type {
  ISubject,
  ActionCreatorType,
  FilterName,
  SortingName,
} from './types';

type ActionCreator = ActionCreatorType<RootState>;

export const searchInList: ActionCreator = (nextSearchString: string) => ({
  type: ACTION_TYPES.LIST_SEARCH,
  payload: nextSearchString,
});

export const toggleFilter: ActionCreator = (nextFilterName: FilterName) => (
  (dispatch, getState) => {
    const { searchString } = getState().list;

    dispatch({
      type: ACTION_TYPES.LIST_FILTER_TOGGLE,
      payload: {
        filterName: nextFilterName,
        needPageReset: searchString !== '',
      },
    });
  }
);

export const toggleSorting: ActionCreator = (nextSortingName: SortingName) => ({
  type: ACTION_TYPES.LIST_SORTING_TOGGLE,
  payload: nextSortingName,
});

export const showNextListPage: ActionCreator = () => ({
  type: ACTION_TYPES.LIST_NEXT_PAGE,
});

export const toggleTheme: ActionCreator = () => ({
  type: ACTION_TYPES.THEME_TOGGLE,
});

interface SubjectsApiResponse {
  data: ISubject[];
}

export const fetchSubjects: ActionCreator = () => async (dispatch): Promise<void> => {
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
