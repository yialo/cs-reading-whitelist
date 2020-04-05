import Type from './action-types.js';

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

export default {
  filterList: (textToSearch, fullList, filterName) => {
    const filteredList = filterSubjects(textToSearch, fullList, filterName);
    return {
      type: Type.FILTER_LIST,
      payload: {
        filteredList,
        textToSearch,
      },
    };
  },
  toggleFilter: (textToSearch, fullList, filterName) => {
    const filteredList = filterSubjects(textToSearch, fullList, filterName);
    return {
      type: Type.TOGGLE_FILTER,
      payload: {
        filterName,
        filteredList,
        textToSearch,
      },
    };
  },
  showSubjectsList: (list) => ({
    type: Type.SUBJECTS_FETCH_COMPLETE,
    payload: list,
  }),
  showFetchError: (err) => ({
    type: Type.SUBJECTS_FETCH_ERROR,
    payload: err,
  }),
};
