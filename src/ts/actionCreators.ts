import { ACTION_TYPES } from './constants';

import { IAction, ActionCreatorType } from './types';

const searchInList: ActionCreatorType = (nextSearchString: string) => ({
  type: ACTION_TYPES.LIST_SEARCH,
  payload: nextSearchString,
});

const toggleFilter: ActionCreatorType = (nextFilterName: string) => ({
  type: ACTION_TYPES.LIST_FILTER_TOGGLE,
  payload: nextFilterName,
});

const toggleTheme: ActionCreatorType = () => ({
  type: ACTION_TYPES.THEME_TOGGLE,
});

const fetchSubjects = () => {
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

export {
  fetchSubjects,
  searchInList,
  toggleFilter,
  toggleTheme,
};
