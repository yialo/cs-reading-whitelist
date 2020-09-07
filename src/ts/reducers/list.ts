import { ACTION_TYPES, FILTERS, SORTING } from '../constants';
import type { IAction, FilterName, SortingName } from 'ts/types';

type ListActions = keyof Pick<typeof ACTION_TYPES, 'LIST_SEARCH' | 'LIST_FILTER_TOGGLE'>;

type SearchString = string;

interface IListAction extends IAction {
  type: ListActions;
  payload: FilterName | SearchString;
}

interface IListState {
  searchString: string;
  filterName: FilterName;
  sortingName: SortingName;
}

type ActionHandler<P> = (state: IListState, payload: P) => IListState;

const INITIAL_STATE = {
  searchString: '',
  filterName: FILTERS.CAPTION,
  sortingName: SORTING.NEW,
};

interface HandlerDict {
  [ACTION_TYPES.LIST_SEARCH]: ActionHandler<SearchString>;
  [ACTION_TYPES.LIST_FILTER_TOGGLE]: ActionHandler<FilterName>;
  [ACTION_TYPES.LIST_SORTING_TOGGLE]: ActionHandler<SortingName>;
  DEFAULT: (state: IListState) => IListState;
}

const handlerDict: HandlerDict = {
  [ACTION_TYPES.LIST_SEARCH]: (state, payload) => ({
    ...state,
    searchString: payload,
  }),
  [ACTION_TYPES.LIST_FILTER_TOGGLE]: (state, payload) => ({
    ...state,
    filterName: payload,
  }),
  [ACTION_TYPES.LIST_SORTING_TOGGLE]: (state, payload) => ({
    ...state,
    sortingName: payload,
  }),
  DEFAULT: (state) => state,
};

export const listReducer = (
  prevState: IListState | undefined,
  action: IListAction,
): IListState => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};
