import {
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { Subject } from '@/entities/subject';
import { PROCESS } from '@/shared/config';
import { generateRtkSliceId } from '@/shared/lib/redux';

import {
  FILTER,
  LIST_PAGE_SIZE,
  SORTING,
  type LinkListState,
  type TFilter,
  type TSorting,
} from '../config';

const INITIAL_PAGE = 1;

const INITIAL_STATE: LinkListState = {
  error: null,
  list: [],
  process: 'IDLE',
  searchString: '',
  page: INITIAL_PAGE,
  filter: FILTER.CAPTION,
  sorting: SORTING.NEW,
};

const selectContent = (state: LinkListState) => state.list;
const selectFilter = (state: LinkListState) => state.filter;
const selectSearchString = (state: LinkListState) => state.searchString;
const selectSorting = (state: LinkListState) => state.sorting;
const selectPage = (state: LinkListState) => state.page;

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

const selectSortedList = createSelector(
  [selectFilteredList, selectSorting, selectPage],
  (filteredList, sorting) =>
    sorting === SORTING.NEW ? [...filteredList].reverse() : filteredList,
);

const selectSortedAmount = createSelector(
  [selectSortedList],
  (sortedList) => sortedList.length,
);

const selectVisibleList = createSelector(
  [selectSortedList, selectPage],
  (sortedList, page) => {
    const itemsToShowAmount = page * LIST_PAGE_SIZE;
    return sortedList.slice(0, itemsToShowAmount);
  },
);

const selectIsLastPage = createSelector(
  [selectSortedAmount, selectPage],
  (sortedAmount, page) => {
    const totalPages = Math.ceil(sortedAmount / LIST_PAGE_SIZE);
    return page === totalPages;
  },
);

export const linkListSlice = createSlice({
  name: generateRtkSliceId('linkList'),
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state) => {
      if (state.process !== PROCESS.LOADING) {
        state.process = PROCESS.LOADING;
        state.error = null;
      }
    },
    fetchSuccess: (state, { payload }: PayloadAction<Subject[]>) => {
      if (state.process === PROCESS.LOADING) {
        state.process = PROCESS.SUCCESS;
        state.list = payload;
      }
    },
    fetchFailure: (state, { payload }: PayloadAction<Error>) => {
      if (state.process === PROCESS.LOADING) {
        state.process = PROCESS.FAILURE;
        state.list = [];
        state.error = payload;
      }
    },
    search: (state, { payload }: PayloadAction<string>) => {
      state.page = INITIAL_PAGE;
      state.searchString = payload;
    },
    toggleFilter: (state, { payload }: PayloadAction<TFilter>) => {
      state.page = INITIAL_PAGE;
      state.filter = payload;
    },
    toggleSorting: (state, { payload }: PayloadAction<TSorting>) => {
      state.sorting = payload;
    },
    getNextPage: (state) => {
      state.page += 1;
    },
  },
  selectors: {
    error: (state) => state.error,
    filter: selectFilter,
    filteredList: selectFilteredList,
    isLastPage: selectIsLastPage,
    page: selectPage,
    process: (state) => state.process,
    searchString: selectSearchString,
    sortedAmount: selectSortedAmount,
    sorting: selectSorting,
    visibleList: selectVisibleList,
  },
});
