import { PROCESS } from '@/enums';

import { FILTER, SORTING } from '../enums';
import { ACTION_TYPE } from './action-types';
import type { TLinkListReducer, TLinkListState } from './types';

const INITIAL_PAGE = 1;

const INITIAL_STATE: TLinkListState = {
  error: null,
  list: [],
  process: 'IDLE',
  searchString: '',
  page: INITIAL_PAGE,
  filter: FILTER.CAPTION,
  sorting: SORTING.NEW,
};

export const linkListReducer: TLinkListReducer = (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPE.FETCH_START: {
      if (state.process === PROCESS.LOADING) {
        return state;
      }

      return {
        ...state,
        process: PROCESS.LOADING,
        error: null,
      };
    }

    case ACTION_TYPE.FETCH_SUCCESS: {
      if (state.process !== PROCESS.LOADING) {
        return state;
      }

      return {
        ...state,
        list: action.payload,
        process: PROCESS.SUCCESS,
      };
    }

    case ACTION_TYPE.FETCH_FAILURE: {
      if (state.process !== PROCESS.LOADING) {
        return state;
      }

      return {
        ...state,
        list: [],
        process: PROCESS.FAILURE,
        error: action.payload,
      };
    }

    case ACTION_TYPE.SEARCH: {
      return {
        ...state,
        page: INITIAL_PAGE,
        searchString: action.payload,
      };
    }

    case ACTION_TYPE.FILTER: {
      return {
        ...state,
        filter: action.payload,
        page: INITIAL_PAGE,
      };
    }

    case ACTION_TYPE.SORTING: {
      return {
        ...state,
        sorting: action.payload,
      };
    }

    case ACTION_TYPE.NEXT_PAGE: {
      return {
        ...state,
        page: state.page + 1,
      };
    }

    default: {
      return state;
    }
  }
};
