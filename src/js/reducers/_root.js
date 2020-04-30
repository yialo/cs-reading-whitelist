import { combineReducers } from 'redux';

import fetchReducer from './fetch.js';
import listReducer from './list.js';
import themeReducer from './theme.js';

export default combineReducers({
  fetch: fetchReducer,
  list: listReducer,
  theme: themeReducer,
});
