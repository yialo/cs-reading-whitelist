import Type from '../actions/types.js';

const INITIAL_STATE = {
  error: null,
  list: [],
  isComplete: false,
};

const handlerDict = {
  [Type.FETCH_COMPLETE]: (state, payload) => ({
    ...state,
    list: payload,
    isComplete: true,
  }),
  [Type.FETCH_ERROR]: (state, payload) => ({
    ...state,
    error: payload,
    isComplete: true,
  }),
  DEFAULT: (state) => state,
};

export default (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handlerDict.DEFAULT;
  return handle(state, payload);
};

export const Selector = {
  error: (state) => state.fetch.error,
  fullList: (state) => state.fetch.list,
  isComplete: (state) => state.fetch.isComplete,
};
