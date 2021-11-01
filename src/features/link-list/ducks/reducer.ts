import { FILTER, SORTING } from '../enums';
import { ACTION_TYPE } from './action-types';
import { TLinkListReducer, TLinkListState } from './types';

const INITIAL_PAGE = 1;

const INITIAL_STATE: TLinkListState = {
  error: null,
  list: [],
  process: 'IDLE',
  searchString: '',
  page: INITIAL_PAGE,
  filterName: FILTER.CAPTION,
  sortingName: SORTING.NEW,
};

export const linkListReducer: TLinkListReducer = (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPE.FETCH_START: {
      if (state.process === 'LOADING') {
        return state;
      }

      return {
        ...state,
        process: 'LOADING',
        error: null,
      };
    }

    case ACTION_TYPE.FETCH_SUCCESS: {
      if (state.process !== 'LOADING') {
        return state;
      }

      return {
        ...state,
        list: action.payload,
        process: 'SUCCESS',
      };
    }

    case ACTION_TYPE.FETCH_FAILURE: {
      if (state.process !== 'LOADING') {
        return state;
      }

      return {
        ...state,
        list: [],
        process: 'FAILURE',
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
        filterName: action.payload,
        page: INITIAL_PAGE,
      };
    }

    case ACTION_TYPE.SORTING: {
      return {
        ...state,
        sortingName: action.payload,
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
