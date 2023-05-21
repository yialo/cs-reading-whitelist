import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Subject } from '@/entities/subject';
import { PROCESS } from '@/shared/config';
import { FILTER, SORTING, type TFilter, type TSorting } from '../config';
import type { LinkListState } from '../config';

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

const slice = createSlice({
  name: 'linkList',
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
});

export const {
  fetchFailure,
  fetchStart,
  fetchSuccess,
  getNextPage,
  search,
  toggleFilter,
  toggleSorting,
} = slice.actions;

export const linkListReducer = slice.reducer;
