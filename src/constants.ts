import { Values } from '@/types/utils';

export const ROUTES = {
  HOME: __GLOBAL_ENV_VARIABLE__PUBLIC_PATH__,
  NAMING: `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}naming`,
} as const;

export type TRoute = Values<typeof ROUTES>;

export const LIST_PAGE_SIZE = 10;
