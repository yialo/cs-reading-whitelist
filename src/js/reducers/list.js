import Type from '../actions/types.js';

const INITIAL_STATE = {
  filterName: 'caption',
  searchString: '',
};

const handleByDefault = (state) => state;

const handlerDict = {
  [Type.FILTER_SEARCH]: (state, payload) => ({
    ...state,
    searchString: payload,
  }),
  [Type.FILTER_TOGGLE]: (state, payload) => ({
    ...state,
    filterName: payload,
  }),
};

export default (prevState, action) => {
  const { type, payload } = action;
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[type] ?? handleByDefault;
  return handle(state, payload);
};
