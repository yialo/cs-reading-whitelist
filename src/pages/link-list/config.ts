import type { Values } from '@type-utils';
import type { Subject } from '@/entities/subject';
import type { Process } from '@/shared/config';

export const LIST_PAGE_SIZE = 10;

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

export interface LinkListState {
  list: Subject[];
  error: Error | null;
  process: Process;
  searchString: string;
  filter: TFilter;
  sorting: TSorting;
  page: number;
}
