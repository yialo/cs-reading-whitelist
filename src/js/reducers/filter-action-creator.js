export const FILTER = 'FILTER';
export const TOGGLE = 'TOGGLE';

export default {
  filterList: (text) => ({
    type: FILTER,
    payload: text,
  }),
  toggleFilter: (filterName) => ({
    type: TOGGLE,
    payload: filterName,
  }),
};
