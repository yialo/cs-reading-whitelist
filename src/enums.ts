import { Values } from '@/types/utils';

export const KEYBOARD_KEY = {
  // NOTE: for future implementation of keyboard navigation
  // UP: 'ArrowUp',
  // DOWN: 'ArrowDown',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
} as const;

export const PROCESS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
} as const;

export type TProcess = Values<typeof PROCESS>;

export const ROUTE = {
  HOME: '',
  NAMING: 'naming',
} as const;

export type TRoute = Values<typeof ROUTE>;
