export const ACTION_TYPE = {
  FETCH_START: '@link-list/fetch-start',
  FETCH_SUCCESS: '@link-list/fetch-complete',
  FETCH_FAILURE: '@link-list/fetch-error',
  SEARCH: '@link-list/search',
  FILTER: '@link-list/filter-toggle',
  SORTING: '@link-list/sorting-toggle',
  NEXT_PAGE: '@link-list/next-page',
} as const;
