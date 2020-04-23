import Type from './types.js';
import filterSubjects from '../utils/filter-subjects.js';

const filterList = (nextSearchString) => {
  return (dispatch, getState) => {
    const { filterName, subjectList } = getState();
    const filteredList = filterSubjects(nextSearchString, subjectList, filterName);
    dispatch({
      type: Type.FILTER_LIST,
      payload: {
        filteredList,
        searchString: nextSearchString,
      },
    });
  };
};

const toggleFilter = (nextFilterName) => {
  return (dispatch, getState) => {
    const { searchString, subjectList } = getState();
    const filteredList = filterSubjects(searchString, subjectList, nextFilterName);
    dispatch({
      type: Type.TOGGLE_FILTER,
      payload: {
        filterName: nextFilterName,
        filteredList,
      },
    });
  };
};

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
