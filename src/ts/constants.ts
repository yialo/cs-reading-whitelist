export const KEYBOARD_KEYS = {
  // NOTE: for future implementation of keyboard navigation
  // UP: 'ArrowUp',
  // DOWN: 'ArrowDown',
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

export const ROUTES = {
  HOME: __GLOBAL_ENV_VARIABLE__PUBLIC_PATH__,
  NAMING: `${__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__}naming`,
};

export const LIST_PAGE_SIZE = 10;
