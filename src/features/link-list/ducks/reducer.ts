import { FILTER, SORTING } from '../enums';
import { ACTION_TYPE } from './action-types';
import { TLinkListReducer, TLinkListState } from './types';

const INITIAL_PAGE = 1;

const INITIAL_STATE: TLinkListState = {
  error: null,
  list: [],
  isComplete: false,
  searchString: '',
  page: INITIAL_PAGE,
  filterName: FILTER.CAPTION,
  sortingName: SORTING.NEW,
};

export const linkListReducer: TLinkListReducer = (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPE.FETCH_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        isComplete: true,
      };
    }

    case ACTION_TYPE.FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isComplete: true,
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
