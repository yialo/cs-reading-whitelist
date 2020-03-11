import {
  FILTER,
  TOGGLE,
} from './filter-action-creator.js';

export const INITIAL_STATE = {
  target: 'caption',
  searchString: '',
};

const handlerDict = {
  [FILTER]: (state, payload) => ({
    ...state,
    searchString: payload,
  }),
  [TOGGLE]: (state, payload) => ({
    ...state,
    target: payload,
  }),
  DEFAULT: (state) => state,
};

export default function (state, action) {
  const handle = handlerDict[action.type] ?? handlerDict.DEFAULT;
  return handle(state, action.payload);
}
