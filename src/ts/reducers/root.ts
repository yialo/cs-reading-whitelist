import { combineReducers } from 'redux';

import type { ActionCreatorGenericType } from 'ts/types';

import { fetchReducer } from './fetch';
import { listReducer } from './list';
import { themeReducer } from './theme';

export const rootReducer = combineReducers({
  fetch: fetchReducer,
  list: listReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type ActionCreatorType = ActionCreatorGenericType<RootState>;
