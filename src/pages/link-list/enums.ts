import type { Values } from '@/types/utils';

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
