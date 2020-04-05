import Type from './action-types.js';

export const initialState = {
  fetchError: null,
  filterName: 'caption',
  filteredList: [],
  isFetchComplete: false,
  searchString: '',
  subjectList: [],
};

const handlerDict = {
  [Type.FILTER_LIST]: (state, payload) => ({
    ...state,
    filteredList: payload.filteredList,
    searchString: payload.textToSearch,
  }),
  [Type.TOGGLE_FILTER]: (state, payload) => ({
    ...state,
    filterName: payload.filterName,
    filteredList: payload.filteredList,
    textToSearch: payload.textToSearch,
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

export default function (state, action) {
  const handle = handlerDict[action.type] ?? handlerDict.DEFAULT;
  return handle(state, action.payload);
}
