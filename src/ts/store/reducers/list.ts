import { ACTION_TYPES } from 'ts/action-types';
import { EFilter, ESorting } from 'ts/constants';

import type { TListReducer } from '../types';

const INITIAL_PAGE = 1;

const INITIAL_STATE = {
  searchString: '',
  page: INITIAL_PAGE,
  filterName: EFilter.CAPTION,
  sortingName: ESorting.NEW,
};

export const listReducer: TListReducer = (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;

  switch (action.type) {
    case ACTION_TYPES.LIST.SEARCH: {
      return {
        ...state,
        page: INITIAL_PAGE,
        searchString: action.payload,
      };
    }

    case ACTION_TYPES.LIST.FILTER_TOGGLE: {
      return {
        ...state,
        filterName: action.payload,
        page: INITIAL_PAGE,
      };
    }

    case ACTION_TYPES.LIST.SORTING_TOGGLE: {
      return {
        ...state,
        sortingName: action.payload,
      };
    }

    case ACTION_TYPES.LIST.NEXT_PAGE: {
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
