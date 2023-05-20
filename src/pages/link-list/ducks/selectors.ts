import { createSelector } from 'reselect';

import { LIST_PAGE_SIZE } from '../config';
import type { State } from '@/store/state';

import { FILTER, SORTING } from '../enums';

export const selectProcess = (state: State) => state.links.process;
export const selectError = (state: State) => state.links.error;
const selectContent = (state: State) => state.links.list;

export const selectFilter = (state: State) => state.links.filter;
export const selectSearchString = (state: State) => state.links.searchString;
export const selectSorting = (state: State) => state.links.sorting;
export const selectPage = (state: State) => state.links.page;

const selectFilteredList = createSelector(
  [selectContent, selectSearchString, selectFilter],
  (fullList, searchString, filter) => {
    const matcher = searchString.toLowerCase();

    if (matcher === '') {
      return fullList;
    }

    return fullList.filter((item) => {
      switch (filter) {
        case FILTER.CAPTION: {
          const hasMatchInMainCaption = item.caption
            .toLowerCase()
            .includes(matcher);

          return (
            hasMatchInMainCaption ||
            item.series?.some((it) =>
              it.caption.toLowerCase().includes(matcher),
            )
          );
        }

        case FILTER.HASHTAG: {
          const hasMatchInMainTags = !!item.tags?.some((tag) =>
            tag.toLowerCase().includes(matcher),
          );

          return (
            hasMatchInMainTags ||
            item.series?.some((it) =>
              it.tags?.some((tag) => tag.toLowerCase().includes(matcher)),
            )
          );
        }

        case FILTER.URL: {
          const hasMatchInMainUrl = item.url?.toLowerCase().includes(matcher);
          return (
            hasMatchInMainUrl ||
            item.series?.some((it) => it.url.toLowerCase().includes(matcher))
          );
        }

        default:
          return true;
      }
    });
  },
);

export const selectSortedList = createSelector(
  [selectFilteredList, selectSorting, selectPage],
  (filteredList, sorting) =>
    sorting === SORTING.NEW ? [...filteredList].reverse() : filteredList,
);

export const selectSortedAmount = createSelector(
  [selectSortedList],
  (sortedList) => sortedList.length,
);

export const selectVisibleList = createSelector(
  [selectSortedList, selectPage],
  (sortedList, page) => {
    const itemsToShowAmount = page * LIST_PAGE_SIZE;
    return sortedList.slice(0, itemsToShowAmount);
  },
);

export const selectIsLastPage = createSelector(
  [selectSortedAmount, selectPage],
  (sortedAmount, page) => {
    const totalPages = Math.ceil(sortedAmount / LIST_PAGE_SIZE);
    return page === totalPages;
  },
);
