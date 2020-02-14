import typeEnum from '../action-types.js';

export const INITIAL_STATE = {
  target: 'caption',
  searchString: '',
};

const handlerDict = {
  [typeEnum.FILTER]: (state, payload) => ({
    ...state,
    searchString: payload,
  }),
  [typeEnum.TOGGLE]: (state, payload) => ({
    ...state,
    target: payload,
  }),
  DEFAULT: (state) => state,
};

export default function (state, action) {
  const handle = handlerDict[action.type] ?? handlerDict.DEFAULT;
  return handle(state, action.payload);
}
