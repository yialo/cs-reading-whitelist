import { combineReducers } from 'redux';

import fetchReducer from './fetch';
import listReducer from './list';
import themeReducer from './theme';

export default combineReducers({
  fetch: fetchReducer,
  list: listReducer,
  theme: themeReducer,
});
