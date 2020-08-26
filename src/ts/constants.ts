export const ACTION_TYPES = {
  LIST_SEARCH: 'LIST_SEARCH',
  LIST_FILTER_TOGGLE: 'LIST_FILTER_TOGGLE',
  FETCH_COMPLETE: 'FETCH_COMPLETE',
  FETCH_ERROR: 'FETCH_ERROR',
  THEME_TOGGLE: 'THEME_TOGGLE',
} as const;

export const FILTERS = {
  CAPTION: 'caption',
  HASHTAG: 'hashtag',
} as const;

const INITIAL_ROUTES = {
  HOME: '',
  CLASSNAMES: 'classnames',
} as const;

type RouteEnum = {
  [name: string]: string;
};

const createActualRoutes = (routeEnum: RouteEnum) => Object.entries(routeEnum)
  .reduce((routes: RouteEnum, [name, path]) => {
    routes[name] = `${process.env.PUBLIC_PATH as string}${path}`;
    return routes;
  }, {});

export const ROUTES = createActualRoutes(INITIAL_ROUTES);
