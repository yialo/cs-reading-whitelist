import Type from './types.js';

const filterList = (nextSearchString) => ({
  type: Type.FILTER_SEARCH,
  payload: nextSearchString,
});

const toggleFilter = (nextFilterName) => ({
  type: Type.FILTER_TOGGLE,
  payload: nextFilterName,
});

const fetchSubjects = () => {
  return async (dispatch) => {
    const apiUrl = `${process.env.PUBLIC_PATH}response/subjects.json?${Date.now()}`;
    try {
      const response = await window.fetch(apiUrl);
      const { data: list } = await response.json();
      dispatch({
        type: Type.SUBJECTS_FETCH_COMPLETE,
        payload: list,
      });
    } catch (err) {
      dispatch({
        type: Type.SUBJECTS_FETCH_ERROR,
        payload: err,
      });
    }
  };
};

export {
  fetchSubjects,
  filterList,
  toggleFilter,
};
