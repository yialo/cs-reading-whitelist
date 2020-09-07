export const ACTION_TYPES = {
  LIST_SEARCH: 'list:search',
  LIST_FILTER_TOGGLE: 'list:filter-toggle',
  LIST_SORTING_TOGGLE: 'list:sorting-toggle',
  FETCH_COMPLETE: 'fetch:complete',
  FETCH_ERROR: 'fetch:error',
  THEME_TOGGLE: 'theme:toggle',
} as const;

export const FILTERS = {
  CAPTION: 'caption',
  HASHTAG: 'hashtag',
} as const;

export const SORTING = {
  NEW: 'new',
  OLD: 'old',
};

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
