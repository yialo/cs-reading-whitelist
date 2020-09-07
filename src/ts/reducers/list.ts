import { ACTION_TYPES, FILTERS, SORTING } from '../constants';
import type {
  $Values,
  IAction,
  FilterName,
  SortingName,
} from 'ts/types';

type ListActions = $Values<
  Pick<
    typeof ACTION_TYPES,
    'LIST_SEARCH' | 'LIST_FILTER_TOGGLE' | 'LIST_SORTING_TOGGLE' | 'LIST_NEXT_PAGE'
  >
>;

type SearchString = string;

interface IListAction extends IAction {
  type: ListActions;
  payload: FilterName | SearchString;
}

interface IListState {
  searchString: string;
  page: number;
  filterName: FilterName;
  sortingName: SortingName;
}

type ActionHandler<P> = (state: IListState, payload: P) => IListState;
type ActionHandlerWithoutPayload = (state: IListState) => IListState;

const INITIAL_STATE = {
  searchString: '',
  page: 1,
  filterName: FILTERS.CAPTION,
  sortingName: SORTING.NEW,
};

interface HandlerDict {
  [ACTION_TYPES.LIST_SEARCH]: ActionHandler<SearchString>;
  [ACTION_TYPES.LIST_FILTER_TOGGLE]: ActionHandler<FilterName>;
  [ACTION_TYPES.LIST_SORTING_TOGGLE]: ActionHandler<SortingName>;
  [ACTION_TYPES.LIST_NEXT_PAGE]: ActionHandlerWithoutPayload;
  DEFAULT: ActionHandlerWithoutPayload;
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
  [ACTION_TYPES.LIST_NEXT_PAGE]: (state) => ({
    ...state,
    page: state.page + 1,
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
