import Type from '../actions/types.js';

const INITIAL_STATE = {
  error: null,
  list: [],
  isComplete: false,
};

const handleByDefault = (state) => state;

const handlerDict = {
  [Type.SUBJECTS_FETCH_COMPLETE]: (state, payload) => ({
    ...state,
    list: payload,
    isComplete: true,
  }),
  [Type.SUBJECTS_FETCH_ERROR]: (state, payload) => ({
    ...state,
    error: payload,
    isComplete: true,
  }),
};

export default (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handleByDefault;
  return handle(state, payload);
};
