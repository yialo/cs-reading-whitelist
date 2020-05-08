import { ActionTypeEnum as Type } from '../constants.js';

const INITIAL_STATE = {
  filterName: 'caption',
  searchString: '',
};

const handlerDict = {
  [Type.LIST_SEARCH]: (state, payload) => ({
    ...state,
    searchString: payload,
  }),
  [Type.LIST_FILTER_TOGGLE]: (state, payload) => ({
    ...state,
    filterName: payload,
  }),
  DEFAULT: (state) => state,
};

export default (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};

export const selector = {
  filterName: (state) => state.list.filterName,
  searchString: (state) => state.list.searchString,
};
