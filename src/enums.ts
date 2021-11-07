import { Values } from '@/types/utils';

export const KEYBOARD_KEY = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
} as const;

export const PROCESS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
} as const;

export type TProcess = Values<typeof PROCESS>;

export const ROUTE = {
  HOME: '/',
  NAMING: 'naming',
} as const;

export type TRoute = Values<typeof ROUTE>;
