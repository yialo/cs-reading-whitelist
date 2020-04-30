import Type from '../utils/types.js';

const INITIAL_STATE = {
  error: null,
  list: [],
  isComplete: false,
};

const handleByDefault = (state) => state;

// TODO: add atomic reducers
// const defineCompletion = (state) => ({ ...state, isComplete: true });
// const defineDataList = (state, payload) => ({});

const handlerDict = {
  [Type.SUBJECTS_FETCH_COMPLETE]: (state, payload) => {
    return {
      ...state,
      list: payload,
      isComplete: true,
    };
  },
  [Type.SUBJECTS_FETCH_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isComplete: true,
    };
  },
};

export default (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handleByDefault;
  return handle(state, payload);
};
