import { combineReducers } from 'redux';

import { linkListReducer } from '@/features/link-list/ducks/reducer';

export const rootReducer = combineReducers({
  links: linkListReducer,
});

export type TState = ReturnType<typeof rootReducer>;
