import { createSelector } from 'reselect';

import { FILTERS, SORTING, LIST_PAGE_SIZE } from './constants';
import { RootState } from './reducers';
import type { ISubject, FilterName, SortingName } from './types';

export const fetchSelector = {
  error: (state: RootState): Error | null => state.fetch.error,
  fullList: (state: RootState): ISubject[] => state.fetch.list,
  isComplete: (state: RootState): boolean => state.fetch.isComplete,
};

export const listSelector = {
  filterName: (state: RootState): FilterName => state.list.filterName,
  page: (state: RootState): number => state.list.page,
  searchString: (state: RootState): string => state.list.searchString,
  sortingName: (state: RootState): SortingName => state.list.sortingName,
};

export const themeSelector = {
  isDark: (state: RootState): boolean => state.theme.isDark,
};

const selectFilteredList = createSelector(
  [
    fetchSelector.fullList,
    listSelector.searchString,
    listSelector.filterName,
  ],
  (fullList, searchString, filterName) => fullList.filter((item) => {
    const matcher = new RegExp(searchString, 'gi');
    switch (filterName) {
      case FILTERS.CAPTION:
        return item.caption.match(matcher);
      case FILTERS.HASHTAG:
        return item.tags.some((tag) => tag.match(matcher));
      default:
        return true;
    }
  }),
);

export const selectSortedList = createSelector(
  [
    selectFilteredList,
    listSelector.sortingName,
    listSelector.page,
  ],
  (filteredList, sortingName, page) => {
    let sortedList = [...filteredList];

    if (sortingName === SORTING.NEW) {
      sortedList = sortedList.reverse();
    }

    const itemsToShowAmount = page * LIST_PAGE_SIZE;
    return sortedList.slice(0, itemsToShowAmount);
  },
);
