import { ACTION_TYPES, FILTERS, SORTING } from 'ts/constants';
import type { IAction, FilterName, SortingName } from 'ts/types';

type SearchString = string;

interface IListState {
  searchString: SearchString;
  page: number;
  filterName: FilterName;
  sortingName: SortingName;
}

interface IListSearchAction extends IAction {
  type: typeof ACTION_TYPES.LIST_SEARCH;
  payload: SearchString;
}

interface FilterTogglePayload {
  filterName: FilterName;
  needPageReset: boolean;
}

interface IListFilterAction extends IAction {
  type: typeof ACTION_TYPES.LIST_FILTER_TOGGLE;
  payload: FilterTogglePayload;
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
  | IListSearchAction
  | IListSortingAction
  | IListPageAction
);

const INITIAL_STATE = {
  searchString: '',
  page: 1,
  filterName: FILTERS.CAPTION,
  sortingName: SORTING.NEW,
};

export const listReducer = (
  prevState: IListState | undefined,
  action: ListAction,
): IListState => {
  const state = prevState ?? INITIAL_STATE;
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.LIST_SEARCH: {
      return {
        ...state,
        searchString: payload as SearchString,
      };
    }

    case ACTION_TYPES.LIST_FILTER_TOGGLE: {
      const { filterName, needPageReset } = payload as FilterTogglePayload;
      return {
        ...state,
        filterName,
        page: needPageReset ? 1 : state.page,
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
