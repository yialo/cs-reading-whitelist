const ROUTER_CONFIG = {
  HOME: '',
  NAMING: 'naming',
} as const;

type TRouteKey = keyof typeof ROUTER_CONFIG;

export const ROUTES = Object.entries(ROUTER_CONFIG)
  .reduce((result, [key, value]) => {
    result[key as TRouteKey] = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}${value}`;
    return result;
  }, {} as Record<TRouteKey, string>);

export const LIST_PAGE_SIZE = 10;
