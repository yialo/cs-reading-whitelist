import type { $Values } from 'ts/types';

const FETCH = {
  COMPLETE: 'fetch:complete',
  ERROR: 'fetch:error',
} as const;

type FetchActionNameType = $Values<typeof FETCH>;

const LIST = {
  SEARCH: 'list:search',
  FILTER_TOGGLE: 'list:filter-toggle',
  SORTING_TOGGLE: 'list:sorting-toggle',
  NEXT_PAGE: 'list:next-page',
} as const;

type ListActionNameType = $Values<typeof LIST>;

const THEME = {
  TOGGLE: 'theme:toggle',
} as const;

type ThemeActionNameType = $Values<typeof THEME>;

export const ACTION_TYPES = {
  FETCH,
  LIST,
  THEME,
} as const;

export type ActionNameType = (
  | FetchActionNameType
  | ListActionNameType
  | ThemeActionNameType
);
