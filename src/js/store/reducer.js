import Type from './types.js';

const INITIAL_STATE = {
  fetchError: null,
  filteredList: [],
  filterName: 'caption',
  searchString: '',
  subjectList: [],
  isFetchComplete: false,
};

const handlerDict = {
  [Type.FILTER_SEARCH]: (state, payload) => ({
    ...state,
    filteredList: payload.filteredList,
    searchString: payload.searchString,
  }),
  [Type.FILTER_TOGGLE]: (state, payload) => ({
    ...state,
    filterName: payload.filterName,
    filteredList: payload.filteredList,
  }),
  [Type.SUBJECTS_FETCH_COMPLETE]: (state, payload) => ({
    ...state,
    filteredList: payload,
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
