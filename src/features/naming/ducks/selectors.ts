import { createSelector } from 'reselect';

import type { TState } from '@/store/state';

export const selectContent = (state: TState) => state.naming.content;

export const selectContentHeaders = createSelector(
  [selectContent],
  (content) => content.map(({ id, title }) => ({ id, title })),
);
