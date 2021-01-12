import { combineReducers } from 'redux';

import { fetchReducer } from './reducers/fetch';
import { listReducer } from './reducers/list';
import { themeReducer } from './reducers/theme';

export const rootReducer = combineReducers({
  fetch: fetchReducer,
  list: listReducer,
  theme: themeReducer,
});
