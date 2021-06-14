enum FetchActionType {
  COMPLETE = 'fetch:complete',
  ERROR = 'fetch:error',
}

enum ListActionType {
  SEARCH = 'list:search',
  FILTER_TOGGLE = 'list:filter-toggle',
  SORTING_TOGGLE = 'list:sorting-toggle',
  NEXT_PAGE = 'list:next-page',
}

enum ThemeActionType {
  TOGGLE = 'theme:toggle',
}

export const ACTION_TYPES = {
  FETCH: FetchActionType,
  LIST: ListActionType,
  THEME: ThemeActionType,
} as const;

export type ActionNameType = (
  | FetchActionType
  | ListActionType
  | ThemeActionType
);
