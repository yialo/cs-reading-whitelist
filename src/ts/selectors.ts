import { createSelector } from 'reselect';

import { FILTERS } from './constants';
import type { FilterName } from './constants';
import { RootState } from './reducers';
import type { ISubject } from './types';

export const fetchSelector = {
  error: (state: RootState): Error | null => state.fetch.error,
  fullList: (state: RootState): ISubject[] => state.fetch.list,
  isComplete: (state: RootState): boolean => state.fetch.isComplete,
};

export const listSelector = {
  filterName: (state: RootState): FilterName => state.list.filterName,
  searchString: (state: RootState): string => state.list.searchString,
};

export const themeSelector = {
  isDark: (state: RootState): boolean => state.theme.isDark,
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
        case FILTERS.CAPTION:
          return item.caption.match(matcher);
        case FILTERS.HASHTAG:
          return item.tags.some((tag) => tag.match(matcher));
        default:
          return true;
      }
    });
  },
);
