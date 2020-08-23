import { ACTION_TYPE } from '../constants';

const INITIAL_STATE = {
  filterName: 'caption',
  searchString: '',
};

const handlerDict = {
  [ACTION_TYPE.LIST_SEARCH]: (state, payload) => ({
    ...state,
    searchString: payload,
  }),
  [ACTION_TYPE.LIST_FILTER_TOGGLE]: (state, payload) => ({
    ...state,
    filterName: payload,
  }),
  DEFAULT: (state) => state,
};

export const listReducer = (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};
