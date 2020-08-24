import { ACTION_TYPES, FILTERS } from '../constants';
import { IAction } from 'ts/types';

type ListActions = keyof Pick<typeof ACTION_TYPES, 'LIST_SEARCH' | 'LIST_FILTER_TOGGLE'>;
type FilterName = keyof typeof FILTERS;
type SearchString = string;

interface IListAction extends IAction {
  type: ListActions;
  payload: FilterName | SearchString;
}

interface IListState {
  filterName: FilterName;
  searchString: string;
}

type ActionHandler<P> = (state: IListState, payload: P) => IListState;

const INITIAL_STATE = {
  filterName: 'caption',
  searchString: '',
};

interface HandlerDict {
  [ACTION_TYPES.LIST_SEARCH]: ActionHandler<SearchString>;
  [ACTION_TYPES.LIST_FILTER_TOGGLE]: ActionHandler<FilterName>;
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
  DEFAULT: (state) => state,
};

export const listReducer = (prevState: IListState, action: IListAction): IListState => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};
