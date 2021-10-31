import { createSelector } from 'reselect';

import { LIST_PAGE_SIZE } from '@/constants';
import { FILTER, SORTING } from '@/enums';
import { ISubject, TFilterName, TSortingName } from '@/types';

import { TState } from './types';

export const fetchSelector = {
  error: (state: TState): Error | null => state.fetch.error,
  fullList: (state: TState): ISubject[] => state.fetch.list,
  isComplete: (state: TState): boolean => state.fetch.isComplete,
};

export const listSelector = {
  filterName: (state: TState): TFilterName => state.list.filterName,
  page: (state: TState): number => state.list.page,
  searchString: (state: TState): string => state.list.searchString,
  sortingName: (state: TState): TSortingName => state.list.sortingName,
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
        case FILTER.CAPTION: {
          const hasMatchInMainCaption = item.caption.toLowerCase().includes(matcher);
          return hasMatchInMainCaption
            || item.series?.some((it) => it.caption.toLowerCase().includes(matcher));
        }

        case FILTER.HASHTAG: {
          const hasMatchInMainTags = item.tags.some((tag) => tag.toLowerCase().includes(matcher));
          return hasMatchInMainTags
            || item.series?.some((it) => (
              it.tags?.some((tag) => tag.toLowerCase().includes(matcher))
            ));
        }

        case FILTER.URL: {
          const hasMatchInMainUrl = item.url?.toLowerCase().includes(matcher);
          return hasMatchInMainUrl
            || item.series?.some((it) => it.url.toLowerCase().includes(matcher));
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
  (filteredList, sortingName) => (
    sortingName === SORTING.NEW ? [...filteredList].reverse() : filteredList
  ),
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
