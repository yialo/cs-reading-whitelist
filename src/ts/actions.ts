import { ActionTypeEnum as Type } from './constants';

import { IAction } from './types';

const searchInList = (nextSearchString: string): IAction => ({
  type: Type.LIST_SEARCH,
  payload: nextSearchString,
});

const toggleFilter = (nextFilterName: string): IAction => ({
  type: Type.LIST_FILTER_TOGGLE,
  payload: nextFilterName,
});

const toggleTheme = (): IAction => ({
  type: Type.THEME_TOGGLE,
});

const fetchSubjects = () => {
  return async (dispatch) => {
    const apiUrl = `${process.env.PUBLIC_PATH}response/subjects.json?${Date.now()}`;
    try {
      const response = await window.fetch(apiUrl);
      const { data: list } = await response.json();
      dispatch({
        type: Type.FETCH_COMPLETE,
        payload: list,
      });
    } catch (err) {
      dispatch({
        type: Type.FETCH_ERROR,
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
