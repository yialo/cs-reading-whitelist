import Type from '../actions/types.js';

const INITIAL_STATE = {
  error: null,
  list: [],
  isComplete: false,
};

const handleByDefault = (state) => state;

const defineCompletion = (state) => ({ ...state, isComplete: true });
const defineDataList = (state, payload) => ({ ...state, list: payload });
const defineError = (state, payload) => ({ ...state, error: payload });

const handlerDict = {
  [Type.SUBJECTS_FETCH_COMPLETE]: (state, payload) => (
    defineCompletion(defineDataList(state, payload))
  ),
  [Type.SUBJECTS_FETCH_ERROR]: (state, payload) => (
    defineCompletion(defineError(state, payload))
  ),
};

export default (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handleByDefault;
  return handle(state, payload);
};
