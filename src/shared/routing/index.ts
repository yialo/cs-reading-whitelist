import type { $Values } from '@type-utils';

export const APP_ROUTE = {
  HOME: '/',
  STRINGER: '/stringer',
} as const;

export type AppRoute = $Values<typeof APP_ROUTE>;
