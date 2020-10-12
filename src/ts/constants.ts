export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
};

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
  NAMING: 'naming',
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

export const LIST_PAGE_SIZE = 10;
