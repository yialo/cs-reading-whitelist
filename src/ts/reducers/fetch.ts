import { ACTION_TYPE } from '../constants';

const INITIAL_STATE = {
  error: null,
  list: [],
  isComplete: false,
};

const handlerDict = {
  [ACTION_TYPE.FETCH_COMPLETE]: (state, payload) => ({
    ...state,
    list: payload,
    isComplete: true,
  }),
  [ACTION_TYPE.FETCH_ERROR]: (state, payload) => ({
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

export const selector = {
  error: (state) => state.fetch.error,
  fullList: (state) => state.fetch.list,
  isComplete: (state) => state.fetch.isComplete,
};
