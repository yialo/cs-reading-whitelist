import { combineReducers } from 'redux';

import fetchReducer from './fetch.ts';
import listReducer from './list.ts';
import themeReducer from './theme.ts';

export default combineReducers({
  fetch: fetchReducer,
  list: listReducer,
  theme: themeReducer,
});
