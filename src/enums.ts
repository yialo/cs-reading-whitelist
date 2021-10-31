import { Values } from './types/utils';

export const KEYBOARD_KEY = {
  // NOTE: for future implementation of keyboard navigation
  // UP: 'ArrowUp',
  // DOWN: 'ArrowDown',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
} as const;

export const FILTER = {
  CAPTION: 'caption',
  HASHTAG: 'hashtag',
  URL: 'url',
} as const;

export type TFilter = Values<typeof FILTER>;

export const SORTING = {
  NEW: 'new',
  OLD: 'old',
} as const;

export type TSorting = Values<typeof SORTING>;
