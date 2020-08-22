import { ACTION_TYPE } from './constants';

import { IAction, ActionCreatorType } from './types';

const searchInList: ActionCreatorType = (nextSearchString: string) => ({
  type: ACTION_TYPE.LIST_SEARCH,
  payload: nextSearchString,
});

const toggleFilter: ActionCreatorType = (nextFilterName: string) => ({
  type: ACTION_TYPE.LIST_FILTER_TOGGLE,
  payload: nextFilterName,
});

const toggleTheme: ActionCreatorType = () => ({
  type: ACTION_TYPE.THEME_TOGGLE,
});

const fetchSubjects = () => {
  return async (dispatch: (action: IAction) => void): Promise<void> => {
    const apiUrl = `${process.env.PUBLIC_PATH}response/subjects.json?${Date.now()}`;
    try {
      const response = await window.fetch(apiUrl);
      const { data: list } = await response.json();
      dispatch({
        type: ACTION_TYPE.FETCH_COMPLETE,
        payload: list,
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPE.FETCH_ERROR,
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
