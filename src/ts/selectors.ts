import { createSelector } from 'reselect';

import { FILTERS, SORTING, LIST_PAGE_SIZE } from './constants';
import type { RootState } from './reducers';
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
  (fullList, searchString, filterName) => {
    const matcher = searchString.toLowerCase();

    if (matcher === '') {
      return fullList;
    }

    return fullList.filter((item) => {
      switch (filterName) {
        case FILTERS.CAPTION: {
          const hasMatchInMainCaption = item.caption.toLowerCase().includes(matcher);
          return hasMatchInMainCaption
            || item.series?.some((it) => it.caption.toLowerCase().includes(matcher));
        }

        case FILTERS.HASHTAG: {
          const hasMatchInMainTags = item.tags.some((tag) => tag.toLowerCase().includes(matcher));
          return hasMatchInMainTags
            || item.series?.some((it) => (
              it.tags?.some((tag) => tag.toLowerCase().includes(matcher))
            ));
        }

        default:
          return true;
      }
    });
  },
);

export const selectSortedList = createSelector(
  [
    selectFilteredList,
    listSelector.sortingName,
    listSelector.page,
  ],
  (filteredList, sortingName) => {
    let sortedList = [...filteredList];

    if (sortingName === SORTING.NEW) {
      sortedList = sortedList.reverse();
    }

    return sortedList;
  },
);

export const getSortedAmount = createSelector(
  [selectSortedList],
  (sortedList) => sortedList.length,
);

export const getVisibleList = createSelector(
  [
    selectSortedList,
    listSelector.page,
  ],
  (sortedList, page) => {
    const itemsToShowAmount = page * LIST_PAGE_SIZE;
    return sortedList.slice(0, itemsToShowAmount);
  },
);

export const getIsLastPage = createSelector(
  [
    getSortedAmount,
    listSelector.page,
  ],
  (sortedAmount, page) => {
    const totalPages = Math.ceil(sortedAmount / LIST_PAGE_SIZE);
    return page === totalPages;
  },
);
