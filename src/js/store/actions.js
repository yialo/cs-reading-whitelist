import Type from './types.js';

const filterSubjects = (textToSearch, fullList, filterName) => {
  let filteredList;
  if (textToSearch === '') {
    filteredList = fullList;
  } else {
    filteredList = fullList.filter((item) => {
      const matcher = new RegExp(textToSearch, 'gi');
      switch (filterName) {
        case 'caption':
          return item.caption.match(matcher);
        case 'hashtag':
          return item.tags.some((tag) => tag.match(matcher));
        default:
          return true;
      }
    });
  }
  return filteredList;
};

const filterList = (textToSearch, fullList, filterName) => {
  const filteredList = filterSubjects(textToSearch, fullList, filterName);
  return {
    type: Type.FILTER_LIST,
    payload: {
      filteredList,
      textToSearch,
    },
  };
};

const toggleFilter = (textToSearch, fullList, filterName) => {
  const filteredList = filterSubjects(textToSearch, fullList, filterName);
  return {
    type: Type.TOGGLE_FILTER,
    payload: {
      filterName,
      filteredList,
      textToSearch,
    },
  };
};

const fetchSubjects = () => {
  return (dispatch) => {
    const apiUrl = `${process.env.PUBLIC_PATH}response/subjects.json?${Date.now()}`;
    window.fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        const list = responseData.data;
        dispatch({
          type: Type.SUBJECTS_FETCH_COMPLETE,
          payload: list,
        });
      })
      .catch((err) => {
        dispatch({
          type: Type.SUBJECTS_FETCH_ERROR,
          payload: err,
        });
      });
  };
};

export {
  fetchSubjects,
  filterList,
  toggleFilter,
};
