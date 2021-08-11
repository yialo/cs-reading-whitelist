import { combineReducers } from 'redux';

import { fetchReducer } from './reducers/fetch';
import { listReducer } from './reducers/list';

export const rootReducer = combineReducers({
  fetch: fetchReducer,
  list: listReducer,
});
