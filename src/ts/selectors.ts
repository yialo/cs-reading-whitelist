import { createSelector } from 'reselect';

export const fetchSelector = {
  error: (state) => state.fetch.error,
  fullList: (state) => state.fetch.list,
  isComplete: (state) => state.fetch.isComplete,
};

export const listSelector = {
  filterName: (state) => state.list.filterName,
  searchString: (state) => state.list.searchString,
};

export const themeSelector = {
  isDark: (state): boolean => state.theme.isDark,
};

export const selectFilteredSubjects = createSelector(
  [
    fetchSelector.fullList,
    listSelector.searchString,
    listSelector.filterName,
  ],
  (fullList, searchString, filterName) => {
    if (searchString === '') {
      return fullList;
    }

    return fullList.filter((item) => {
      const matcher = new RegExp(searchString, 'gi');
      switch (filterName) {
        case 'caption':
          return item.caption.match(matcher);
        case 'hashtag':
          return item.tags.some((tag) => tag.match(matcher));
        default:
          return true;
      }
    });
  },
);
