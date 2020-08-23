export const fetchSelector = {
  error: (state) => state.fetch.error,
  fullList: (state) => state.fetch.list,
  isComplete: (state) => state.fetch.isComplete,
};

export const listSelector = {
  filterName: (state) => state.list.filterName,
  searchString: (state) => state.list.searchString,
};

export const themeSelector = {
  isDark: (state): boolean => state.theme.isDark,
};
