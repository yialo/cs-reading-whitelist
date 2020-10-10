import { FILTERS, SORTING } from 'ts/constants';
import type { IAction, FilterName, SortingName } from 'ts/types';

import { ACTION_TYPES } from '../actionTypes';

type SearchString = string;

interface IListState {
  searchString: SearchString;
  page: number;
  filterName: FilterName;
  sortingName: SortingName;
}

interface IListSearchAction extends IAction {
  type: typeof ACTION_TYPES.LIST.SEARCH;
  payload: SearchString;
}

interface IListFilterAction extends IAction {
  type: typeof ACTION_TYPES.LIST.FILTER_TOGGLE;
  payload: FilterName;
}

interface IListSortingAction extends IAction {
  type: typeof ACTION_TYPES.LIST.SORTING_TOGGLE;
  payload: SortingName;
}

interface IListPageAction extends IAction {
  type: typeof ACTION_TYPES.LIST.NEXT_PAGE;
  payload?: undefined;
}

type ListAction = (
  | IListFilterAction
  | IListSearchAction
  | IListSortingAction
  | IListPageAction
);

const INITIAL_PAGE = 1;

const INITIAL_STATE = {
  searchString: '',
  page: INITIAL_PAGE,
  filterName: FILTERS.CAPTION,
  sortingName: SORTING.NEW,
};

export const listReducer = (
  prevState: IListState | undefined,
  action: ListAction,
): IListState => {
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
