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

const publicPath = process.env.PUBLIC_PATH as string;

export const ROUTES = {
  HOME: publicPath,
  CLASSNAMES: `${publicPath}classnames`,
} as const;
