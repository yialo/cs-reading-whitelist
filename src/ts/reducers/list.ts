import { ACTION_TYPES, FILTERS, SORTING } from 'ts/constants';
import type { IAction, FilterName, SortingName } from 'ts/types';

type SearchString = string;

interface IListState {
  searchString: SearchString;
  page: number;
  filterName: FilterName;
  sortingName: SortingName;
}

interface IListSearchNextAction extends IAction {
  type: typeof ACTION_TYPES.LIST_SEARCH_NEXT;
  payload: SearchString;
}

interface IListSearchResetAction extends IAction {
  type: typeof ACTION_TYPES.LIST_SEARCH_RESET;
  payload?: undefined;
}

interface IListFilterAction extends IAction {
  type: typeof ACTION_TYPES.LIST_FILTER_TOGGLE;
  payload: FilterName;
}

interface IListSortingAction extends IAction {
  type: typeof ACTION_TYPES.LIST_SORTING_TOGGLE;
  payload: SortingName;
}

interface IListPageAction extends IAction {
  type: typeof ACTION_TYPES.LIST_NEXT_PAGE;
  payload?: undefined;
}

type ListAction = (
  | IListFilterAction
  | IListSearchNextAction
  | IListSearchResetAction
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

/** TODO:
 * 1). Add action to prevent filtering when empty string passed
 * 2). Add series subject handlin logics based on whether search started or not
 */

export const listReducer = (
  prevState: IListState | undefined,
  action: ListAction,
): IListState => {
  const state = prevState ?? INITIAL_STATE;
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.LIST_SEARCH_NEXT: {
      return {
        ...state,
        page: INITIAL_PAGE,
        searchString: payload as SearchString,
      };
    }

    case ACTION_TYPES.LIST_SEARCH_RESET: {
      return {
        ...state,
        page: INITIAL_PAGE,
        searchString: '',
      };
    }

    case ACTION_TYPES.LIST_FILTER_TOGGLE: {
      return {
        ...state,
        filterName: payload as FilterName,
        page: INITIAL_PAGE,
      };
    }

    case ACTION_TYPES.LIST_SORTING_TOGGLE: {
      return {
        ...state,
        sortingName: payload as SortingName,
      };
    }

    case ACTION_TYPES.LIST_NEXT_PAGE: {
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
