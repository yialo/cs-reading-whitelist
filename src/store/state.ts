import { combineReducers } from 'redux';

import { linkListReducer } from '@/features/link-list/ducks/reducer';
import { namingReducer } from '@/features/naming/ducks/reducer';

export const rootReducer = combineReducers({
  links: linkListReducer,
  naming: namingReducer,
});

export type TState = ReturnType<typeof rootReducer>;
