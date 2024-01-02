import type { Values } from '@type-utils';

export const ENV_MODE = {
  DEV: 'development',
  PROD: 'production',
} as const;

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

export type Process = Values<typeof PROCESS>;

export const ROUTE = {
  HOME: '/',
} as const;

export type Route = Values<typeof ROUTE>;
