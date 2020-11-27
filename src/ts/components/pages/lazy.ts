import { lazy } from 'react';

export const LazyNamingPage = lazy(() => import(
  /* webpackChunkName: 'page_naming', webpackPrefetch: true */
  './naming'
));
