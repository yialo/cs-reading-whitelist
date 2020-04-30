import { createSelector } from 'reselect';

export const getFullList = (state) => state.fetch.list;

export const getFilteredList = createSelector(
    [getFullList],
    () => {}
);
