import { lazy } from 'react';

export const LazyLinkListPage = lazy(() => import(
  /* webpackChunkName: 'page_link-list', webpackPrefetch: true */
  './c_link-list-page'
));

export const LazyNamingPage = lazy(() => import(
  /* webpackChunkName: 'page_naming', webpackPrefetch: true */
  './c_naming-page'
));
