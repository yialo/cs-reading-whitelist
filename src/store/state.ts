import { combineReducers } from 'redux';

import { linkListReducer } from '@/pages/link-list/ducks/reducer';

export const rootReducer = combineReducers({
  links: linkListReducer,
});

export type State = ReturnType<typeof rootReducer>;
