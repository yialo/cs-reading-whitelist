import Type from './types.js';

// TODO: create two reducers

const INITIAL_STATE = {
  fetchError: null,
  filterName: 'caption',
  searchString: '',
  subjectList: [],
  isFetchComplete: false,
};

const handlerDict = {
  [Type.FILTER_SEARCH]: (state, payload) => ({
    ...state,
    searchString: payload,
  }),
  [Type.FILTER_TOGGLE]: (state, payload) => ({
    ...state,
    filterName: payload,
  }),
  [Type.SUBJECTS_FETCH_COMPLETE]: (state, payload) => ({
    ...state,
    subjectList: payload,
    isFetchComplete: true,
  }),
  [Type.SUBJECTS_FETCH_ERROR]: (state, payload) => ({
    ...state,
    fetchError: payload,
    isFetchComplete: true,
  }),
  DEFAULT: (state) => state,
};

export default (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;
  const handle = handlerDict[action.type] ?? handlerDict.DEFAULT;
  return handle(state, action.payload);
};
