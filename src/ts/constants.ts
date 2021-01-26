export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
};

export enum EFilter {
  CAPTION = 'caption',
  HASHTAG = 'hashtag',
  URL = 'url',
}

export enum ESorting {
  NEW = 'new',
  OLD = 'old',
}

const INITIAL_ROUTES = {
  HOME: '',
  NAMING: 'naming',
} as const;

type RouteEnum = {
  [name: string]: string;
};

const createActualRoutes = (routeEnum: RouteEnum) => Object.entries(routeEnum)
  .reduce((routes: RouteEnum, [name, path]) => {
    routes[name] = `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}${path}`;
    return routes;
  }, {});

export const ROUTES = createActualRoutes(INITIAL_ROUTES);

export const LIST_PAGE_SIZE = 10;
